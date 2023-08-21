import React, { useState } from "react";

const Month = () => {
  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event) => {
    const newMonth = event.target.value;
    setSelectedMonth(newMonth);
    // console.log("Selected month:", newMonth);
  };

  return (
    <div className="bg-indigo-100 p-1 rounded-lg shadow-xl max-w-[50] mx-auto m-5 items-end flex">
     
      <input
        type="month"
        value={selectedMonth}
        onChange={handleMonthChange}
        className="w-full p-2 border rounded focus:outline-none focus:border-indigo-500"
      />
    </div>
  );
};

export default Month;
