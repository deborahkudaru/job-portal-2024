import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Logo1 = () => {
  return (
    <div>
      <Link
        to="/"
        className="text-slate-950 text-4xl md:text-2xl  font-bold  font-DancingScript"
      >
        Work<span className="text-violet-400">buddy</span>
      </Link>
      <CgProfile />
    </div>
  );
};

export default Logo1;
