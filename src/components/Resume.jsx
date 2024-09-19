import React, { useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const ResumeUpload = ({ userId }) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [resumeURL, setResumeURL] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    const storage = getStorage();
    const storageRef = ref(storage, `resumes/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Upload error:', error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setResumeURL(downloadURL);
          saveResumeToFirestore(userId, downloadURL); 
        });
      }
    );
  };

  const saveResumeToFirestore = async (userId, downloadURL) => {
    const db = getFirestore();
    const userRef = doc(db, 'Users', userId);

    try {
      await setDoc(userRef, { resumeURL: downloadURL }, { merge: true });
      console.log('Resume URL saved successfully');
    } catch (error) {
      console.error('Error saving resume URL to Firestore:', error);
    }
  };

  return (
    <div className="resume-upload bg-gray-100 p-4 rounded shadow-md">
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        className="bg-violet-400 text-gray-50 px-4 py-2 rounded hover:bg-blue-600"
      >
        Upload Resume
      </button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      {resumeURL && (
        <p className="mt-4">
          Resume Uploaded! View it{' '}
          <a href={resumeURL} className="text-violet-500 underline">
            here
          </a>.
        </p>
      )}
    </div>
  );
};

export default ResumeUpload;
