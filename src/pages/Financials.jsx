import React from "react";
import Dashboard from "./Financials/Dashboard";
import Navbar from "../compo/Navbar";
import Fnavbar from "../compo/Financials/Fnavbar";


const Financials = () => {
  return (
   <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
    <div>
      <Navbar/>
      <Fnavbar/>
      <Dashboard/>
    </div>
 
    </div>
  );
};

export default Financials;
