import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { IoAnalyticsSharp, IoHourglassOutline } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import { BiSolidUserAccount } from "react-icons/bi";
import { AiOutlineGift } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

const SidebarJS = ({ children }) => {
  const menus = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "Financials", link: "/financials/dashboard", icon: GiReceiveMoney },
    { name: "Analytics", link: "/analytics", icon: IoAnalyticsSharp },
    {
      name: "Timeline",
      link: "/timeline/tm",
      icon: IoHourglassOutline,
      margin: true,
    },
    { name: "Directory", link: "/directory", icon: BsFillJournalBookmarkFill },
    { name: "Files", link: "/files", icon: LuFiles },
    {
      name: "Account",
      link: "/account",
      icon: BiSolidUserAccount,
      margin: true,
    },
    { name: "Rewards", link: "/rewards", icon: AiOutlineGift },
  ];
  const [open, setOpen] = useState(true);
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <section className="flex">
      <div
        className={`bg-[#0e0e0e] min-h-[100vh] ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div >
          {open && (
            <div className=" flex justify-center">
              <span className=" m-3 font-semibold text-lg sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                JordenSky
              </span>
            </div>
          )}
          {/* <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(open)}
          /> */}
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={`${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
                activeLink === menu?.link ? "text-indigo-500" : ""
              }`}
              onClick={() => handleLinkClick(menu?.link)}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                <div className="text-xl">{menu?.name}</div>
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`flex ${
          open ? "" : ""
        } transition-all duration-500 overflow-x-hidden`}
      >
        {children}
      </div>
    </section>
  );
};

export default SidebarJS;
