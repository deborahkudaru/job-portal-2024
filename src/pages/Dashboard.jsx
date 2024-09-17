import React from "react";
import Applied from "../components/Applied";
import LoggedHead from "../components/LoggedHead";

const Dashboard = () => {
  return (
    <div className="bg-gray-50 pb-32">
      <LoggedHead />
      <Applied />
    </div>
  );
};

export default Dashboard;
