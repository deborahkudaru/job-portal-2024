// import React, { useState } from "react";
// import { storage, db } from "../Firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, updateDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";const Photo = () => {
//   const [image, setImage] = useState(null);
//   const [progress, setProgress] = useState(0);
//   const [imageUrl, setImageUrl] = useState("");

//   const auth = getAuth(); // Get the current authenticated user

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleUpload = () => {
//     const user = auth.currentUser; // Get the authenticated user

//     if (!image || !user) return;

//     const storageRef = ref(storage, `images/${user.uid}/${image.name}`);
//     const uploadTask = uploadBytesResumable(storageRef, image);

//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {
//         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setProgress(progress);
//       },
//       (error) => {
//         console.error("Upload failed", error);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//           setImageUrl(downloadURL);

//           // Save the download URL to the user's document in the "users" collection
//           try {
//             const docRef = doc(db, "Users", user.uid); // Automatically use the user's uid as the document ID
//             await updateDoc(docRef, {
//               imageUrl: downloadURL,
//             });
//             alert("Image URL added to user's document");
//           } catch (e) {
//             console.error("Error updating document: ", e);
//           }
//         });
//       }
//     );
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <p>Upload Progress: {progress}%</p>
//       {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ width: "100px" }} />}
//     </div>
//   );
// };

// export default Photo;
