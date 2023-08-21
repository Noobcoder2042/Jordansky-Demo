import React from "react";
import { GrContact } from "react-icons/gr";

const AsidebarHome = () => {
  return (
    <div className="flex justify-center items-center flex-col h-full ">
      <div className="bg-indigo-500 p-2 m-3 mr-0 w-[15vw] flex flex-col text-white lg:py-4 rounded-md">
        <span className="mb-2 text-center font-bold text-lg">Contact your team</span>
        <span className="text-xs text-center mb-2 lg:text-[10px] ">
          Have questions? Reach out to your dedicated accounting manager.
        </span>
        <span className="text-xs text-center py-1 lg:py-1">
          Accounting expert
        </span>
        <div className="font-bold flex justify-between items-center text-indigo-500 py-1 px-2 bg-gray-100 rounded-xl shadow-md">
          <span>Akash B</span>
          <button className="rounded-md p-1 hover:bg-green-500 hover:shadow-md">
            <GrContact />
          </button>
        </div>

        <span className="text-xs text-center py-1 lg:py-1">Tax expert</span>
        <div className="font-bold flex justify-between items-center text-indigo-500 py-1 px-2 bg-gray-100 rounded-xl shadow-md">
          <span>Urvi G</span>
          <button className="rounded-md p-1 hover:bg-green-500 hover:shadow-md">
            <GrContact />
          </button>
        </div>

        <span className="text-xs text-center py-1 lg:py-1">CFO expert</span>
        <div className="font-bold flex justify-between items-center text-indigo-500 py-1 px-2 bg-gray-100 rounded-xl shadow-md">
          <span>Jordensky</span>
          <button className="rounded-md p-1 hover:bg-green-500 hover:shadow-md">
            <GrContact />
          </button>
        </div>
      </div>
      <div className="bg-indigo-500 p-2 m-3 mr-0 w-[15vw] text-white rounded-md">
        Next Delivery Date
      </div>
      <div className="bg-indigo-500 p-2 m-3 mr-0 w-[15vw] text-white rounded-md">
        Refer a client and earn
      </div>
    </div>
  );
};

export default AsidebarHome;
