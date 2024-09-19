import React from "react";
// import Nav from "./LoggedNav";
// import UserIcon from "./UserIcon";
// import LoggedLogo from "./LoggedLogo";
import WorkerLogo from "./WorkerLogo";
import WorkerNav from "./WorkerNav";

const WorkerHead = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-between flex-wrap z-50 p-4 md:pt-8 lg:px-48 px-10">
      <WorkerLogo />
      <WorkerNav />
    </div>
  );
};

export default WorkerHead;
