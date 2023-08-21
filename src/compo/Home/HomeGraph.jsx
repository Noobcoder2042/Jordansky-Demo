import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const HomeGraph = ({}) => {
  const data = [
    { label: "Jan", value: 300 },
    { label: "Feb", value: 500 },
    { label: "Mar", value: 800 },
    { label: "Apr", value: 600 },
    { label: "May", value: 900 },
    { label: "Jun", value: 1200 },
    { label: "Jul", value: 1500 },
    { label: "Aug", value: 1100 },
    { label: "Sep", value: 1400 },
    { label: "Oct", value: 1600 },
    { label: "Nov", value: 1800 },
    { label: "Dec", value: 2000 },
  ];

  return (
    <div className="bg-white p-1 rounded-lg ">
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer aspect={3}>
          <LineChart data={data} margin={{ right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" interval={"preserveStartEnd"} />
            <YAxis />
            <Tooltip />
            <Line
              type="linear"
              dataKey="value"
              stroke="url(#line-gradient)"
              strokeWidth={3}
              dot={{ r: 2 }}
            />
            <defs>
              <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="2">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HomeGraph;
