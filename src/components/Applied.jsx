import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";


const Applied = () => {
  const [apply, setApply] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApply = async () => {
      try {
        const applyCollection = collection(db, "Apply");
        const applySnapshot = await getDocs(applyCollection);
        const applyList = applySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApply(applyList);
      } catch (error) {
        console.error("Error fetching applied jobs: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApply();
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
    return <p>Loading applied jobs...</p>;
  }

  return (
    <>
      <h2 className="text-4xl font-bold pt-28 text-center bg-gray-50">
        Application Lists
      </h2>
      <div className="px-48 pt-10 bg-gray-50 grid grid-cols-2 gap-10 pb-10">
        {apply.length > 0 ? (
          apply.map((apply) => (
            <div
              key={apply.id}
              className="bg-white py-3 px-6 gap-5 border-2 border-slate-100 rounded"
            >
              <h2 className="text-xl text-violet-400">{apply.fullName}</h2>
              <p className="text-slate-600 font-medium mb-2">
                <strong className="text-black">Contact:</strong> {apply.contact}
              </p>
              <p className="text-slate-600 font-medium mb-2">
                <strong className="text-black">Location:</strong>{" "}
                {apply.location}
              </p>
              <p className="text-slate-600 font-medium mb-2">{apply.job}</p>
              <p className="text-slate-600 font-medium mb-2">{apply.price}</p>
              <p className="text-gray-400 flex justify-end relative top-5 font-semibold text-xs">
                {formatDate(apply.createdAt)}
              </p>
              <button
                type="submit"
                className="bg-violet-400 text-gray-50 font-medium px-5 py-2 rounded"
              >
                Accept
              </button>
            </div>
          ))
        ) : (
          <p className="text-2xl font-semibold ">No applications available.</p>
        )}
      </div>
    </>
  );
};

export default Applied;
