import React from "react";
import { FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Noti from "./Noti";

const UserIcon = () => {
  return (
    <div>
      <div className="flex gap-3">
        <Link to="/profile">
          <FaRegUser className="text-xl text-gray-700 hover:text-back" />
        </Link>
        <Noti />
      </div>
    </div>
  );
};

export default UserIcon;
