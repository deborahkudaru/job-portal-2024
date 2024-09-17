import React from "react";
import { Link } from "react-router-dom";

const LoggedLogo = () => {
  return (
    <div>
      <Link
        to="/logged-home"
        className="text-slate-950 text-4xl md:text-2xl  font-bold  font-DancingScript"
      >
        Work<span className="text-violet-400">buddy</span>
      </Link>
    </div>
  );
};

export default LoggedLogo;
