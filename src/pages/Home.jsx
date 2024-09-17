import React from "react";
import image from "../images/image.jpg";
import Brands from "../components/Brands";
import Category from "../components/Category";
import FindTalent from "../components/FindTalent";
import Prefooter from "../components/Prefooter";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import LoggedHead from "../components/LoggedHead";

const Home = () => {
  return (
    <div>
      <LoggedHead />
      <div className="px-48 pt-20 pb-5 bg-sky-100">
        <div className="flex">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight pb-4">
              <span className="text-gray-200 bg-violet-400 px-2 py-1 rounded-lg">
                WE HELP
              </span>{" "}
              YOU FIND YOUR <span className="text-violet-400">DREAM JOB</span>
            </h1>
            <p className="text-slate-500 font-medium w-4/5">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>
          </div>

          <img className="w-96  rounded-2xl" src={image} alt="" />
        </div>
        <BsStars className="relative bottom-44 left-1/2 text-8xl" />

        <>
          <div className="flex gap-3 relative bottom-28">
            <Link className="text-sky-100 bg-violet-400 px-20 py-3  font-semibold text-sm rounded-md">
              Search Job{" "}
            </Link>
          </div>
        </>
        <Brands />
      </div>
      <h2 className="text-4xl font-bold pt-28 text-center bg-gray-50">Popular Job Categories</h2>
      <Category />
      <FindTalent />
      <div className="px-48 bg-gray-50">
      </div>
      <Prefooter />
    </div>
  );
};

export default Home;
