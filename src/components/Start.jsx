import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <h2>Start Your New Journey With Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sequi
        aliquid? Unde tenetur repellat excepturi laborum minima officia
        reprehenderit eligendi cumque hic! Repudiandae, quam. Nobis commodi
        autem voluptatum quos minus!
      </p>

      <div className="flex gap-3 relative bottom-28">
        <Link className="text-sky-100 bg-violet-400 px-20 py-3  font-semibold text-sm rounded-md">
          Search Job{" "}
        </Link>

        <Link className="text-slate-600 border-slate-600 font-semibold border-2 px-12 py-3 text-sm rounded-md">
          How to apply
        </Link>
        <FaPlayCircle className="text-slate-900 relative right-44 top-4 text-lg" />
      </div>
    </div>
  );
};

export default Start;
