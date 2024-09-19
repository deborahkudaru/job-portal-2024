import React from "react";
import Logo from "./Logo";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Prefooter = () => {
  return (
    <div className="lg:px-16 px-10 pb-10 bg-sky-100 text-slate-500 font-semibold lg:pt-20 pt-10">
      <div className="flex lg:flex-row lg:justify-between flex-col">
        <div>
          <Logo />
          <div className="border-2 border-slate-400 rounded-lg mt-5 lg:px-5 px-0 pb-3">
            <FaMagnifyingGlass className="relative top-6 left-3"/>
            <input
              type="email"
              placeholder="Email address"
              className="lg:px-10 px-10 bg-sky-100 border-0 outline-none"
            />
            <button className="text-sky-100 bg-violet-400 lg:px-5 lg:py-2  px-2 py-1 font-semibold text-sm rounded-md ml-10">
              Subscribe
            </button>
          </div>

          <div className="flex gap-14 pt-10 text-sm">
            <div>
              <h4 className="text-black font-normal">Contact Us</h4>
              <p>deborahkudaru@gmail.com</p>
              <p>09161235877</p>
            </div>
            <div>
              <h4 className="text-black font-normal">Location</h4>
              <p>University Of Jos, Plateau State</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 lg:gap-20 gap-10 text-sm lg:mt-0 mt-5">
          <div>
            <h3 className="font-bold lg:text-xl text-black lg:pb-4">Company</h3>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">About Us</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Why Portal</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Testimonial</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Promotions</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Forum</p>
          </div>
          <div>
            <h3 className="font-bold lg:text-xl text-black lg:pb-4">Help</h3>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Contact Us</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Our Job</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">My Account</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">My Career</p>
          </div>
          <div>
            <h3 className="font-bold lg:text-xl text-black lg:pb-4">Jobs</h3>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Graphic Design</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Data Analyst</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Business Model</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Project Manager</p>
            <p className="lg:mb-3 mb-0.5 lg:text-base text-sm">Other Jobs</p>
          </div>
        </div>
      </div>

      {/* <footer className="bg-black text-white py-20">2024 WorkBuddy</footer> */}
    </div>
  );
};

export default Prefooter;
