import React, { useEffect, useState } from "react";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
// import WorkerHead from "../components/WorkerHead";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoBriefcaseOutline } from "react-icons/io5";
import SideMenu from "../components/SideMenu";
import ProfileTop from "../components/ProfileTop";
import { BsUpload } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoReload } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import AllApplied from "../components/AllApplied";

const WorkerProfile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
            console.log(docSnap.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex gap-3 bg-gray-50">
      <div className="bg-gray-50">
        <SideMenu />
      </div>
      <div
        className="bg-gray-50 
      "
      >
        <ProfileTop />
        <div>
          {userDetails ? (
            <div>
              <p className="border-t-2 mb-5"></p>
              <div className="flex justify-between mb-5 pr-6">
                <div>
                  <h1 className="text-2xl font-semibold">{userDetails.job}</h1>
                  <p className="text-lg text-gray-600 font-semibold">
                    Open Hiring / {userDetails.job} /{" "}
                    <span className="text-violet-400">Applied</span>
                  </p>
                </div>
                <div className="flex gap-2 text-gray-50 bg-violet-400 px-2 text-lg font-semibold rounded-md">
                  <BsUpload className="mt-4" />
                  <Link className="p-0 mt-3">Export Report</Link>
                </div>
              </div>
              <div className="flex justify-between mb-5 pr-6">
                <div className="flex bg-gray-100 border rounded-lg gap-5 py-2 px-2 font-semibold text-slate-500">
                  <Link className="">All Applied</Link>
                  <Link>Scheduled Interview</Link>
                  <Link>Draft Applied</Link>
                </div>
                <div className="flex gap-2">
                  <button className="flex gap-2 border border-slate-300 rounded-lg py-2 px-3">
                    <IoReload className="relative top-1 text-xl" />
                    History Works
                  </button>
                  <button className="flex gap-2 border border-slate-300 rounded-lg py-2 px-3">
                    <IoFilterOutline className="relative top-1 text-xl" />
                    Filter
                  </button>
                  <button className="flex gap-2 border border-slate-300 rounded-lg py-2 px-3">
                    <CiSettings className="text-2xl" />
                    Setting Page
                  </button>
                </div>
              </div>
              <div className="flex gap-3">
                <AllApplied />
                <div className="border rounded-t-xl">
                  <div className="bg-gradient-to-r from-sky-300 to-violet-400 rounded-t-xl text-center py-10">
                    <p className="text-gray-50 text-4xl font-bold mb-3">
                      {userDetails.job}
                    </p>
                    <p className="text-white text-xl">
                      Select the best employee candidate for your team
                    </p>
                  </div>

                  <div className="px-5">
                    <img
                      src=""
                      alt=""
                      className="border border-gray-500 w-32 h-32 rounded-full relative bottom-7"
                    />

                    <div className="flex justify-between relative bottom-3">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {userDetails.firstName} {userDetails.lastName}
                        </h3>
                        <p className="text-lg text-gray-600">
                          I am a Software Engineer based in Nigeria
                        </p>
                      </div>
                      <button className="text-gray-50 bg-violet-400 px-1 text-lg font-semibold rounded-md">
                        Schedule Interview
                      </button>
                    </div>
                    <p className="border w-full"></p>
                    <div className="mt-10 flex">
                      <div>
                        <div className="inline-block">
                          <h3 className="text-2xl text-violet-500 font-semibold pb-2">
                            Description
                          </h3>
                          <p className="text-slate-500 font-medium mb-10">
                            {userDetails.description}
                          </p>
                        </div>
                        <div>
                          <h3 className="text-2xl text-violet-500 font-semibold pb-2">
                            Experience
                          </h3>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl text-violet-500 font-semibold pb-2">
                          Overview
                        </h3>
                        <div className="border px-20 py-10">
                          <div>
                            <div className="flex gap-2">
                              <AiOutlineUsergroupAdd className="bg-gray-200 text-2xl" />
                              <p>Applied for</p>
                            </div>
                            <h4 className="text-xl">{userDetails.job}</h4>
                          </div>
                          <div>
                            <div className="flex gap-2">
                              <SlCalender className="bg-gray-200 text-2xl" />
                              <p>Application Date</p>
                            </div>
                            <h4 className="text-2xl"></h4>
                          </div>
                          <div>
                            <div className="flex gap-2">
                              <IoBriefcaseOutline className="bg-gray-200 text-2xl" />
                              <p>Experience</p>
                            </div>
                            <h4 className="text-2xl"></h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  {/* <div className="flex gap-20">
                    <div className="flex flex-col gap-5 pb-10">
                      <p className="text-slate-500 font-medium">
                        Phone:{" "}
                        <span className="text-violet-500">
                          {userDetails.phoneNumber}
                        </span>
                      </p>
                      <p className="text-slate-500 font-medium">
                        Email:{" "}
                        <span className="text-violet-500 underline">
                          {userDetails.email}
                        </span>
                      </p>
                      <p className="text-slate-500 font-medium">
                        Status: <span className="text-violet-500">Worker</span>
                      </p>
                      <p className="text-slate-500 font-medium">
                        Gender:{" "}
                        <span className="text-violet-500">
                          {userDetails.gender}
                        </span>
                      </p>
                    </div>
                  </div> */}
                </div>
                <div>
                  <div className="flex gap-5 text-2xl"></div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;
