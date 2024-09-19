import React from "react";
import { Link } from "react-router-dom";

const WorkerLogo = () => {
  return (
    <div>
      <Link
        to="/worker-home"
        className="text-slate-950 lg:text-4xl md:text-2xl text-xl  font-bold  font-DancingScript"
      >
        Work<span className="text-violet-400">buddy</span>
      </Link>
    </div>
  );
};

export default WorkerLogo;
