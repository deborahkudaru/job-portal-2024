import React from "react";
import { IoIosMore } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import Applied from "./Applied";

const AllApplied = () => {
  return (
    <div className="border rounded-lg px-4 py-3">
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl mb-3">Others Applied</h3>
        <button>
          <IoIosMore className="text-xl" />
        </button>
      </div>
      <div className="flex gap-2 border rounded-lg py-2 px-3 mb-3">
        <BiSearch className="text-xl text-gray-500" />
        <input
          type="text"
          placeholder="Search Applied..."
          className="bg-gray-50 outline-0"
        />
      </div>
      <div className="flex justify-between mb-3">
        <div className="flex gap-2">
          <input type="checkbox" name="" id="" className=""/>
          <label htmlFor="">Select All</label>
        </div>
        <div className="flex gap-2">
          <p>Sort By</p>
          <button>
            <IoIosArrowDown className="relative top-1" />
          </button>
        </div>
      </div>
      <p className="border-t-2"></p>
      <Applied />
    </div>
  );
};

export default AllApplied;
