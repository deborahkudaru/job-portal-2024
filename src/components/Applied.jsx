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
      <div className="flex pb-10">
        {apply.length > 0 ? (
          apply.map((apply) => (
            <div
              key={apply.id}
              className="bg-white py-3"
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
          <p className="">No applications available.</p>
        )}
      </div>
    </>
  );
};

export default Applied;
