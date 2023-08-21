import React from "react";
import HomeGraph from "../compo/Home/HomeGraph";
import Month from "../compo/Home/Month";
import DropDown from "../compo/Home/DropDown";
import Navbar from "../compo/Navbar";
import AsidebarHome from "../compo/Home/AsidebarHome";


const lineChartTitles = ["Line Chart 1", "Line Chart 2", "Line Chart 3"];

const Home = () => {
  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <div>
        <Navbar />
        
        <div className="flex justify-between  items-center">
          <div className=" mb-1 overflow-hidden py-1 px-2 bg-gradient-to-t from-indigo-900 to-indigo-500 text-white rounded-xl shadow-lg drop-shadow-md 2xl:w-[80%] xl:w-[82%] lg:w-[82%]  md:h-[80px] sm:w-[80%]  ">
            <span className="font-bold text-xl">Welcome To JordenSky</span>
            <br />

            <span className="text-sm">
              It’s good to have you. We’ll give you a call shortly to set up
              your free JordenSky trial. In the meantime, we set you up with
              some fictional data to help you understand what you can get out of
              our application.
            </span>
          </div>
          <div>
            <Month />
          </div>
        </div>
        <div>
          <div className="flex justify-between    items-center">
            {lineChartTitles.map((title, index) => (
              <div
                key={index}
                className="py-2 px-2 text-center bg-indigo-500 text-white rounded-md font-semibold w-[33%]"
              >
                <HomeGraph />
                <span className="">{title}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <DropDown />
            <AsidebarHome />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
