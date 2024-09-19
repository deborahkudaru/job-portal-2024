import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { X } from "lucide-react";
import UserIcon from "./UserIcon";

const LoggedNav = () => {
  return (
    <ul className="flex space-x-12 nav  font-medium ">
      <li>
        <Link
          to="/"
          className="text-slate-500  hover:text-slate-950 transition duration-300"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/category"
          className="text-slate-500 hover:text-slate-950 transition duration-300"
        >
          Category
        </Link>
      </li>
      <li>
        <Link
          to="/apply"
          className="text-slate-500 hover:text-slate-950 transition duration-300"
        >
          Apply
        </Link>
      </li>
      <li>
        <Link
          to="/post-job"
          className="text-slate-500 hover:text-slate-950 transition duration-300"
        >
          Post a Job
        </Link>
      </li>
      <li>
        <UserIcon />
      </li>
    </ul>
  );
};

const Nav = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNav = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="w-full justify-between hidden  md:flex">
          <LoggedNav />
        </div>
        <div className="md:hidden text-violet-400">
          <button onClick={toggleNav} className="object-right">
            {isOpen ? <X /> : <RiMenu3Fill className="text-4xl" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center gap-7 basis-full md:pr-20 font-medium">
          <li>
            <Link
              to="/"
              className="text-slate-500  hover:text-slate-950 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className="text-slate-500 hover:text-slate-950 transition duration-300"
            >
              Category
            </Link>
          </li>
          <li>
            <Link
              to="/apply"
              className="text-slate-500 hover:text-slate-950 transition duration-300"
            >
              Apply
            </Link>
          </li>
          <li>
            <Link
              to="/post-job"
              className="text-slate-500 hover:text-slate-950 transition duration-300"
            >
              Post a Job
            </Link>
          </li>
          <li>
            <UserIcon />
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
