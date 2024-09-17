import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import { Link } from "react-router-dom";

const PostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobCollection = collection(db, "jobs");
        const jobSnapshot = await getDocs(jobCollection);
        const jobList = jobSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold pt-28 text-center bg-gray-50">
        Job Listings
      </h1>
      <div className="px-48 pt-10 bg-gray-50 grid grid-cols-2 gap-10 pb-10">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white py-3 px-6 gap-5 border-2 border-slate-100 rounded"
            >
              <h2 className="text-xl text-violet-400">{job.title}</h2>
              <p className="text-slate-600 font-medium mb-2">
                <strong className="text-black">Company:</strong> {job.company}
              </p>
              <p className="text-slate-600 font-medium mb-2">
                <strong className="text-black">Location:</strong> {job.location}
              </p>
              <p className="text-slate-600 font-medium mb-2">{job.description}</p>
              <p className="text-slate-600 font-medium mb-2">{job.price}</p>
              <p className="text-gray-400 flex justify-end relative top-5 font-semibold text-xs">
                {formatDate(job.createdAt)}
              </p>
              <Link to="/apply" className="bg-violet-400 text-gray-50 font-medium px-5 py-2 rounded">Apply</Link>
            </div>
          ))
        ) : (
          <p className="text-2xl font-semibold ">No jobs available.</p>
        )}
      </div>
    </>
  );
};

export default PostedJobs;
