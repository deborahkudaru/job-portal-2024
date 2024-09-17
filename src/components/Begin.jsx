import React from "react";
import picture from "../images/lastpic.jpg";
import { Link } from "react-router-dom";

const Begin = () => {
  return (
    <div className="lg:px-48 px-10 lg:pt-40 pt-20 bg-gray-50 pb-20">
      <div className="flex lg:flex-row flex-col-reverse gap-10">
        <img src={picture} alt="normal-stuff" className="lg:w-1/2" />
        <div>
          <h2 className="lg:text-4xl text-2xl font-bold lg:mb-5 mb-2">
            Begin Your New Journey With Us
          </h2>
          <p className="font-semibold text-slate-500 text-sm lg:text-base pb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis,
            quae! Expedita cupiditate quo, excepturi quaerat similique ad
            dignissimos, id ipsa repellat saepe nostrum ex omnis nulla
            voluptates dolor eligendi a?
          </p>
          
          <div className="flex gap-3">
            <Link
              to="/worker-signup"
              className="text-sky-100 bg-violet-400 px-10 py-3  font-semibold text-sm rounded-md"
            >
              Find A Job{" "}
            </Link>

            <Link
              to="/employer-signup"
              className="text-slate-600 border-slate-600 font-semibold border-2 px-8 py-3 text-sm rounded-md"
            >
              Find A Talent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Begin;
