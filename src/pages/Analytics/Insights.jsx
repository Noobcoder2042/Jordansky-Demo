import React from "react";

import Anavbar from "../../compo/Analytics/Anavbar";
import Navbar from "../../compo/Navbar";

const Insights = () => {
  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <Navbar/>
      <Anavbar />
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
        Insights
      </div>
      <div className="flex items-end justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg px-4 py-2 mr-2 transition duration-300 transform active:translate-y-1">
          Download
        </button>
        <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-lg px-4 py-2 transition duration-300 transform active:translate-y-1">
          Expand
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[45vh] flex items-center justify-center text-6xl">
        Particulars
      </div>
    </div>
  );
};

export default Insights;
