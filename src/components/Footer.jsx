import React from "react";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-neutral-900 text-gray-50 lg:text-sm text-sm font-semibold lg:px-32 px-10 lg:py-16 py-8">
      <p className="flex gap-1">
        <MdOutlineCopyright />
        2024 Job Portal. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
 