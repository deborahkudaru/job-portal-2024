import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../Firebase";
import LoggedHead from "../components/LoggedHead";
import { auth } from "../Firebase";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const { currentUser } = auth;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("You need to be logged in to post a job");
      return;
    }

    try {
      await addDoc(collection(db, "jobs"), {
        title,
        description,
        company,
        location,
        price,
        createdAt: Timestamp.now(),
        postedBy: {
          uid: currentUser.uid,
          // email: currentUser.email,
        },
      });

      setTitle("");
      setDescription("");
      setCompany("");
      setLocation("");
      setPrice("");
      alert("Job posted successfully!");
      window.location.href = "/logged-home";
    } catch (error) {
      console.error("Error posting job: ", error);
    }
  };

  return (
    <div className="bg-gray-50">
      <LoggedHead />
      <div className="lg:px-48 px-10">
        <div className="mt-16 border border-slate-500 lg:w-1/2 m-auto py-14 rounded-xl px-10 mb-10">
          <h2 className="lg:text-2xl text-xl font-semibold mb-10  text-center">
            Post a Job
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label>Job Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Job Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Company Name</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Location</label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="w-1/4 m-auto">
              <button
                className="block text-center bg-violet-400 text-gray-50 lg:px-4 px-2 py-2 rounded-xl font-semibold mt-10"
                type="submit"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostJob;

// const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [company, setCompany] = useState("");
//   const [location, setLocation] = useState("");
//   const [price, setPrice] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "jobs", ), {
//         title,
//         description,
//         company,
//         location,
//         price,
//         createdAt: Timestamp.now(),
//       });

//       setTitle("");
//       setDescription("");
//       setCompany("");
//       setLocation("");
//       setPrice("");
//       alert("Job posted successfully!");
//       window.location.href="/logged-home"
//     } catch (error) {
//       console.error("Error posting job: ", error);
//     }
//   };
