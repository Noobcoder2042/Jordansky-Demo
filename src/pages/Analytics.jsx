import React from "react";
import MIS from "./Analytics/MIS";
import Anavbar from "../compo/Analytics/Anavbar";
import Navbar from "../compo/Navbar";

const Analytics = () => {
  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <div>
        <Navbar />
        <Anavbar />
        <MIS />
      </div>
    </div>
  );
};

export default Analytics;
