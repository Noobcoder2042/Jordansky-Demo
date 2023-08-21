import React from "react";
import Anavbar from "../../compo/Analytics/Anavbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Navbar from "../../compo/Navbar";

const MIS = () => {
  const data = [
    { name: "Jan", uv: 4000 },
    { name: "Feb", uv: 3000 },
    { name: "Mar", uv: 2000 },
    { name: "Apr", uv: 5000 },
    { name: "May", uv: 6000 },
    { name: "Jun", uv: 4000 },
  ];
  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <Navbar/>
      <Anavbar />
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
        MIS
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[60vh]  text-3xl">
        Sales
        <div className="rounded-lg   flex justify-center items-center ">
          <div className="w-full ">
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MIS;
