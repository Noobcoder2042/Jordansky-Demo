import React from "react";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    to: "/analytics/mis",
    text: " MIS",
  },
  {
    to: "/analytics/insights",
    text: "Insights",
  },
  {
    to: "/analytics/newvendor",
    text: "New Vendors",
  },
];

const Anavbar = () => {
  return (
    <nav className="flex  items-center  my-3 rounded-md  ">
    <div className=" w-[30%] md:w-[100%] sm:w-[100%] ">
      <ul className="flex justify-around      items-center  ">
        {navigationLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className=" p-1 rounded-md text-xs 2xl:text-lg md:text-[9px] sm:text-[5px] hover:bg-gray-200 hover:shadow-gray-200 hover:shadow-md xl:text-[15px]   "
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
    <div className="w-[70%] ml-7 md:hidden sm:hidden  ">
      <hr className="bg-gray-100 h-[4px] mt-2"></hr>
      
    </div>
  </nav>
  );
};

export default Anavbar;
