import React from "react";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    to: "/timeline/tm",
    text: "Timeline",
  },
  {
    to: "/timeline/coa",
    text: "Charts of Accounts",
  },
];

const Tnavbar = () => {
  return (
    <nav className="flex  items-center  my-3 rounded-md  ">
      <div className=" w-[30%] md:w-[100%] sm:w-[100%] lg:text-xs ">
        <ul className="flex justify-around  md:justify-normal lg:justify-normal  sm:justify-normal    items-center  ">
          {navigationLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className=" p-1 rounded-md 2xl:text-lg  hover:bg-gray-200 hover:shadow-gray-200 hover:shadow-md  lg:ml-2 "
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[70%] ml-7 lg:ml-2 md:hidden sm:hidden  ">
        <hr className="bg-gray-100 h-[4px] mt-2"></hr>
      </div>
    </nav>
  );
};

export default Tnavbar;
