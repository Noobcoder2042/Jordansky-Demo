import React from "react";
import { NavLink } from "react-router-dom";

const navigationLinks = [
 {
    to: "/directory",
    text: "Customers",
  },
  {
    to: "*",
    text: "Vendors",
  },
];

const Dnavbar = () => {
  return (
    <nav className="flex  items-center  my-3 rounded-md  ">
    <div className=" w-[20%] md:w-[100%] sm:w-[100%] ">
      <ul className="flex justify-around   items-center  ">
        {navigationLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className=" p-1 rounded-md text-xs 2xl:text-lg xl:text-[15px]  md:text-[9px] sm:text-[5px] hover:bg-gray-200 hover:shadow-gray-200 hover:shadow-md   "
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

export default Dnavbar;
