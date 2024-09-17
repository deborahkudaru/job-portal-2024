import React from "react";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { PiPaintBrushHouseholdThin } from "react-icons/pi";
import { GiGardeningShears } from "react-icons/gi";

const categories = [
  {
    icon: <FaCamera />,
    jobName: "PhotoGraphy",
    jobStatus: "Available",
  },
  {
    icon: <PiPaintBrushHouseholdThin />,
    jobName: "House Keeping",
    jobStatus: "Available",
  },
  {
    icon: <GiGardeningShears />,
    jobName: "Gardening",
    jobStatus: "Available",
  },
  // {
  //   icon: <FaCamera />,
  //   jobName: "PhotoGraphy",
  //   jobStatus: "Available",
  // },
  // {
  //   icon: <FaCamera />,
  //   jobName: "PhotoGraphy",
  //   jobStatus: "Available",
  // },
  // {
  //   icon: <FaCamera />,
  //   jobName: "PhotoGraphy",
  //   jobStatus: "Available",
  // },
];

const Category = () => {
  return (
    <div className="lg:px-48 px-10 lg:pt-16 pt-8 bg-gray-50 grid lg:grid-cols-3 md:grid-cols-2 gap-3">
      {categories.map((category) => (
        <Link to="/" className="">
          <div className="bg-white py-3 flex lg:px-6 px-3 gap-5 border-2 border-slate-100 rounded">
            <p className="bg-violet-400  p-3 rounded lg:text-6xl text-3xl text-white">
              {category.icon}
            </p>
            <div>
              <h3 className="lg:text-xl text-lg font-bold">{category.jobName}</h3>
              <p className="text-xs text-slate-500 font-semibold mt-2">
                {category.jobStatus}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
