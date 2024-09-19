import React from "react";
import airtable from "../images/airtable.png";
import amplitude from "../images/amplitude.png";
import rippling from "../images/rippling.png";
import atlassian from "../images/atlassian.png";
import gumroad from "../images/gumroad.png";

const Brands = () => {
  return (
    <div className="flex justify-between bg-sky-100">
      <img src={airtable} alt="airtable-logo" className="lg:w-32 w-10" />
      <img src={amplitude} alt="amplitude-logo" className="lg:w-32 w-10" />
      <img src={rippling} alt="rippling-logo" className="lg:w-32 w-10" />
      <img src={atlassian} alt="atlassian-logo" className="lg:w-32 w-10" />
      <img src={gumroad} alt="gumroad-logo" className="lg:w-32 w-10" />
      {/* <img src={airtable} alt="airtable-logo" className="w-32" />
      <img src={amplitude} alt="amplitude-logo" className="w-32" />
      <img src={rippling} alt="rippling-logo" className="w-32" />
      <img src={atlassian} alt="atlassian-logo" className="w-32" />
      <img src={gumroad} alt="gumroad-logo" className="w-32" />
      <img src={airtable} alt="airtable-logo" className="w-32" />
      <img src={amplitude} alt="amplitude-logo" className="w-32" />
      <img src={rippling} alt="rippling-logo" className="w-32" />
      <img src={atlassian} alt="atlassian-logo" className="w-32" />
      <img src={gumroad} alt="gumroad-logo" className="w-32" />
      <img src={airtable} alt="airtable-logo" className="w-32" />
      <img src={amplitude} alt="amplitude-logo" className="w-32" />
      <img src={rippling} alt="rippling-logo" className="w-32" />
      <img src={atlassian} alt="atlassian-logo" className="w-32" />
      <img src={gumroad} alt="gumroad-logo" className="w-32" /> */}
    </div>
  );
};

export default Brands;
