import React from "react";
import { IoSettings } from "react-icons/io5";
import { BsBellFill } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center my-3 text-xl text-gray-900 font-semibold ">
      <h1 className="text-2xl font-semibold">
        Welcome <span className="text-indigo-600">User</span>
      </h1>
      <div className="flex space-x-4 ml-auto">
        <IoSettings className="w-8 h-8 text-gray-600 hover:text-indigo-600 transition duration-300" />
        <BsBellFill className="w-8 h-8 text-gray-600 hover:text-indigo-600 transition duration-300" />
        <AiOutlineGift className="w-8 h-8 text-gray-600 hover:text-indigo-600 transition duration-300" />
        <img
          src="https://source.unsplash.com/random/200x200?sig=1"
          alt="User"
          className="w-8 h-8 rounded-full border-2 border-indigo-600 hover:border-indigo-400 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
