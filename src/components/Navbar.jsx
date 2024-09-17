import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { X } from "lucide-react";

const NavLinks = () => {
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
          to="/"
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
          Post Job
        </Link>
      </li>
      <li>
        <Link
          to="/login"
          className="text-slate-900 transition duration-300 ml-10 border-slate-900 rounded-lg border-2 px-8 py-2"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className="text-sky-100 transition duration-300 bg-violet-400 rounded-lg border-2 px-8 py-3"
        >
          SignUp
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleNavbar = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <div className="w-full justify-between hidden  md:flex">
          <NavLinks />
        </div>
        <div className="md:hidden text-violet-400">
          <button onClick={toggleNavbar} className="object-right">
            {isOpen ? <X /> : <RiMenu3Fill className="text-4xl" />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center gap-7 basis-full md:pr-20 font-medium">
          <li>
            <Link
              to="/about"
              className="text-slate-400  hover:text-violet-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className="text-slate-400 hover:text-violet-400 transition duration-300"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="text-slate-400 hover:text-violet-400 transition duration-300"
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-slate-400 hover:text-violet-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
