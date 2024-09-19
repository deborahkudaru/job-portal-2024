import React from "react";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { TbUsersPlus } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { LuUsers } from "react-icons/lu";
import { MdDateRange } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import SideMenuLogo from "./SideMenuLogo";

const SideMenu = () => {
  return (
    <div className="bg-neutral-900 border text-gray-200 font-light flex flex-col gap-8 w-full px-10 pb-96 pt-5">
      <SideMenuLogo />
      <div className="flex flex-col gap-4">
        <p>MAIN MENU</p>
        <div className="flex gap-2/ hover:text-violet-400">
          <RxDashboard className="relative top-1" />
          <Link>Dashboard</Link>
        </div>
        <div className="flex gap-2 hover:text-violet-400">
          <TbUsersPlus className="relative top-1" />
          <Link>Open Jobs</Link>
        </div>
        <div className="flex gap-2 hover:text-violet-400">
          <MdPayments className="relative top-1" />
          <Link>Payroll</Link>
        </div>
        <div className="flex gap-2 hover:text-violet-400">
          <PiSuitcaseSimpleLight className="relative top-1" />
          <Link>Role Job</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>OTHERS</p>
        <div className="flex gap-2 hover:text-violet-400">
          <LuUsers className="relative top-1" />
          <Link>Employer</Link>
        </div>
        <div className="flex gap-2 hover:text-violet-400">
          <MdDateRange className="relative top-1" />
          <Link>Schedule</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>PREFERENCES</p>
        <div className="flex gap-2 hover:text-violet-400">
          <GoQuestion className="relative top-1" />
          <Link>Help Center</Link>
        </div>
        <div className="flex gap-2 hover:text-violet-400">
          <FiSettings className="relative top-1" />
          <Link>Settings</Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
