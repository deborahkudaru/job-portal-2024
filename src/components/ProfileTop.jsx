import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

const ProfileTop = () => {
  return (
    <div className="flex justify-between my-5 pr-6">
      <div className="border border-gray-300 flex gap-2 pl-5 pr-14 py-1 rounded-lg">
        <BiSearch className="relative top-1 text-gray-500 text-xl" />
        <input type="text" placeholder="Search now..." className="bg-gray-50 pr-16 outline-0"/>
      </div>
      <div className="flex gap-2">
        <button className="border border-gray-300 px-4 py-2 rounded-lg flex gap-2 text-gray-600"><FiEdit  className="text-xl relative top-1"/> Custom Page</button>
        <button className="border border-gray-300 px-4 py-2 rounded-lg flex gap-2 text-gray-600"><IoShareSocialOutline  className="text-xl relative top-1" /> Availability</button>
        <button><IoIosInformationCircleOutline className="text-3xl text-gray-600"/></button>
        <button><IoIosNotificationsOutline className="text-3xl text-gray-600"/></button>
      </div>
    </div>
  );
};

export default ProfileTop;
