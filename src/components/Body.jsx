import React from "react";
import image from "../images/image.jpg";
import Brands from "./Brands";
import Howto from "./Howto";
import Category from "./Category";
// import FindTalent from "./FindTalent";
import Review from "./Review";
import Begin from "./Begin";
import Prefooter from "./Prefooter";
import Header from "./Header";
import { BsStars } from "react-icons/bs";
// import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="">
      <Header />
      <div className="lg:pt-20 pt-10 pb-5 bg-sky-100">
        <div className="lg:px-48 px-10">
          <div className="flex lg:flex-row flex-col">
            <div>
              <h1 className="lg:text-5xl text-3xl font-extrabold lg:leading-tight pb-4">
                <span className="text-gray-200 bg-violet-400 lg:px-1 px-2 py-1 rounded-lg">
                  WE HELP
                </span>{" "}
                YOU FIND YOUR <span className="text-violet-400">DREAM JOB</span>
              </h1>
              <p className="text-slate-500 font-medium lg:w-4/5 w-full mb-3">
                Each month, more than 3 million job seekers turn to website in
                their search for work, making over 140,000 applications every
                single day
              </p>
            </div>
            <img className="lg:w-96 rounded-2xl" src={image} alt="" />
          </div>
          <BsStars className="relative lg:bottom-44 lg:left-1/2 lg:text-8xl lg:flex hidden" />
          <>
            <div className="flex gap-3 lg:relative lg:bottom-28 mt-3">
              <Link className="text-sky-100 bg-violet-400 lg:px-20 px-5 lg:py-3 py-1 font-semibold text-sm rounded-md">
                Search Job{" "}
              </Link>
              <Link className="text-slate-600 border-slate-600 font-semibold border-2 lg:px-12 px-3.5 lg:py-3 py-1 text-sm rounded-md">
                How to apply
              </Link>
              {/* <FaPlayCircle className="text-slate-900 relative lg:right-44 lg:top-4 top-3 right-32 lg:ml-0 ml-0.5 b lg:text-lg text-xs" /> */}
            </div>
          </>
        </div>
        <Brands />
      </div>
      <Howto />
      <Category />
      {/* <FindTalent /> */}
      <div className="lg:px-48 px-10 bg-gray-50">
        <h2 className="lg:text-4xl text-2xl font-bold pt-28 text-center pb-10">
          See What They Say About Us
        </h2>
        <Review />
      </div>
      <Begin />
      <Prefooter />
    </div>
  );
};

export default Body;
