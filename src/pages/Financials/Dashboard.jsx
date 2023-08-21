import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const data = [
    { name: "Jan", uv: 4000 },
    { name: "Feb", uv: 3000 },
    { name: "Mar", uv: 2000 },
    { name: "Apr", uv: 5000 },
    { name: "May", uv: 6000 },
    { name: "Jun", uv: 4000 },
  ];

  const colors = ["#6528F7", "#A076F9", "#D7BBF5", "#EDE4FF"];
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className=" text-center   rounded-md font-semibold w-[99.5%]">
          <div className=" ">
            <h2 className="m-2">Net Profit</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="uv" fill={colors[0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
