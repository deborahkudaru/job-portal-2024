import React from "react";
import Nav from "./LoggedNav";
// import UserIcon from "./UserIcon";
import LoggedLogo from "./LoggedLogo";

const LoggedHead = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-between flex-wrap z-50 p-4 md:pt-8 lg:px-48 px-10 bg-sky-100\\">
      <LoggedLogo />
      <Nav />
    </div>
  );
};

export default LoggedHead;
