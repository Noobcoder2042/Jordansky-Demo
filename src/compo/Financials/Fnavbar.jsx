import React from "react";
import { NavLink } from "react-router-dom";

const navigationLinks = [
  {
    to: "/financials/dashboard",
    text: "Dashboard",
  },
  {
    to: "/financials/income-statement",
    text: "Income Statement",
  },
  {
    to: "/financials/balance-sheet",
    text: "Balance Sheet",
  },
  {
    to: "/financials/cash-flow",
    text: "Cash Flow Statement",
  },
  {
    to: "/financials/ratios",
    text: "Ratios",
  },
];

const Fnavbar = () => {
  return (
    <nav className="flex  items-center  my-3 rounded-md  ">
      <div className=" w-[60%] md:w-[100%] sm:w-[100%] xl:w-[60%]  ">
        <ul className="flex justify-around  items-center  ">
          {navigationLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className=" p-1 rounded-md text-xs 2xl:text-[15px] xl:text-[15px] md:text-[9px] sm:text-[5px] hover:bg-gray-200 hover:shadow-gray-200 hover:shadow-md   "
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[40%] ml-7 md:hidden sm:hidden xl:w-[40%] lg:hidden ">
        <hr className="bg-gray-100 h-[4px] mt-2"></hr>
        
      </div>
    </nav>
  );
};

export default Fnavbar;
