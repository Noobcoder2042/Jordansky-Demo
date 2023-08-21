import React from "react";

import TimeLineHome from "./Timeline/TimeLineHome";
import Navbar from "../compo/Navbar";
import Tnavbar from "../compo/Timeline/Tnavbar";

const Timeline = () => {
  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <div>
        
        <Navbar />
        <Tnavbar />
        <TimeLineHome />
      </div>
    </div>
  );
};

export default Timeline;
