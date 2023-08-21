import React from "react";
import Navbar from "../compo/Navbar";
import Dnavbar from "../compo/Directory/Dnavbar";
import SearchBar from "../compo/Timeline/SearchBar";

const Directory = () => {
  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <Navbar />
      <Dnavbar />
      <SearchBar />
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[65vh] flex items-center justify-center text-6xl">
        Name And Amount
      </div>
    </div>
  );
};

export default Directory;
