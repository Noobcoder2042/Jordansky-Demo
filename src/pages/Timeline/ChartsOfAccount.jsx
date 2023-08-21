import React from "react";
import Navbar from "../../compo/Navbar";
import Tnavbar from "../../compo/Timeline/Tnavbar";

const ChartsOfAccount = () => {
  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <Navbar />
      <Tnavbar />
      <div>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
        Assets
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
        Liabilities
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
        Income
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
        Expenses
      </div>
    </div>
    </div>
  );
};

export default ChartsOfAccount;
