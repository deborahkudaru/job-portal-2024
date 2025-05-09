import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="flex w-full justify-between flex-wrap z-50 p-4 md:pt-8 lg:px-20 px-10 bg-sky-100">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
