import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../Firebase";
import WorkerHead from "../components/WorkerHead";

const Apply = () => {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [job, setJob] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Apply"), {
        fullName,
        contact,
        job,
        location,
        price,
        createdAt: Timestamp.now(),
      }); 

      setFullName("");
      setContact("");
      setJob("");
      setLocation("");
      setPrice("");
      alert("Job posted successfully!");
      window.location.href="/worker-home"
    } catch (error) {
      console.error("Error posting job: ", error);
    }
  };

  return (
    <div className="bg-gray-50">
      <WorkerHead />
      <div className="px-48">
        <div className="mt-16 border border-slate-500 w-1/2 m-auto py-14 rounded-xl px-10 mb-10">
          <h2 className="text-4xl font-semibold mb-10  text-center">
            Apply for Job
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col my-3">
              <label>Contact</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col">
              <label>Job Applied</label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                required
                className="border border-slate-200 rounded-xl px-6 py-2 outline-0"
              />
            </div>
            <div className="flex flex-col my-3">
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
            <button
              className="block text-center bg-violet-400 text-gray-50 px-4 py-2 rounded-xl font-semibold relative left-40 mt-10"
              type="submit"
            >
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Apply;
