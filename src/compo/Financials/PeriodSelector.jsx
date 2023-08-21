import React, { useState } from "react";

const YearSelector = ({ onYearSelect }) => {
  const fiscalYears = ["2022-23", "2023-24", "2024-25"];

  return (
    <div className="mt-4 flex items-center gap-2 justify-center text-indigo-600">
      <p className="text-black"> FY</p>
      <select
        onChange={(e) => onYearSelect(e.target.value)}
        className="border rounded-md px-2 py-1 border-indigo-600"
      >
        <option value="">Select FY</option>
        {fiscalYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

const QuarterSelector = ({ onQuarterSelect }) => {
  const quarters = ["Q1", "Q2", "Q3", "Q4"];

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 flex items-center gap-2 justify-center">
        {quarters.map((quarter) => (
          <button
            key={quarter}
            onClick={() => onQuarterSelect(quarter)}
            className="p-4 px-5 text-lg rounded-full shadow-md bg-blue-500 hover:bg-blue-600 hover:shadow-xl focus:bg-blue-700 focus:outline text-white"
          >
            {quarter}
          </button>
        ))}
      </div>
    </div>
  );
};

const MonthSelector = ({ onMonthSelect }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="mt-4 flex flex-col items-center ">
      <p className="text-black">Select a month:</p>
      <div className="  grid grid-cols-4 shadow rounded-md  p-3  ">
        {months.map((month, index) => (
          <button
            key={month}
            onClick={() => onMonthSelect(month)}
            className=" px-2 my-1 mx-[2px] py-2  rounded-sm bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl focus:bg-indigo-900 focus:outline  text-white "
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
};

const PeriodSelector = ({ onPeriodChange, onButtonSelect }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedFiscalYear, setSelectedFiscalYear] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    onButtonSelect(buttonName);
  };

  const handleFiscalYearSelect = (fiscalYear) => {
    setSelectedFiscalYear(fiscalYear);
    setSelectedQuarter(null); // Reset quarter selection
    setSelectedMonth(null); // Reset month selection
    onPeriodChange(fiscalYear, null, null); // Pass selected year to parent
  };

  const handleQuarterSelect = (quarter) => {
    setSelectedQuarter(quarter);
    setSelectedMonth(null); // Reset month selection
    onPeriodChange(selectedFiscalYear, quarter, null); // Pass selected year and quarter to parent
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    onPeriodChange(selectedFiscalYear, null, month); // Pass selected year and month to parent
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-[300px] h-[100%] bg-indigo-200 p-4 rounded-xl shadow-2xl   bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-100">
        <div className="flex space-x-1">
          <button
            onClick={() => handleButtonClick("Year")}
            className="px-4 py-2 shadow-md bg-indigo-600 hover:bg-blue-700 focus:bg-indigo-900 focus:outline-none text-white rounded-lg"
          >
            Year
          </button>
          <button
            onClick={() => handleButtonClick("Quarter")}
            className="px-4 py-2 shadow-md bg-indigo-600 hover:bg-blue-700 focus:bg-indigo-900 focus:outline-none text-white rounded-lg"
          >
            Quarter
          </button>
          <button
            onClick={() => handleButtonClick("Month")}
            className="px-4 py-2 shadow-md bg-indigo-600 hover:bg-blue-700 focus:bg-indigo-900 focus:outline-none text-white rounded-lg"
          >
            Month
          </button>
        </div>

        <div className="mt-4">
          {selectedButton && (
            <div>
              {selectedButton === "Year" && (
                <YearSelector onYearSelect={handleFiscalYearSelect} />
              )}
              {selectedButton === "Quarter" && (
                <div>
                  <YearSelector onYearSelect={handleFiscalYearSelect} />
                  <QuarterSelector onQuarterSelect={handleQuarterSelect} />
                </div>
              )}
              {selectedButton === "Month" && (
                <div>
                  <YearSelector onYearSelect={handleFiscalYearSelect} />
                  <MonthSelector onMonthSelect={handleMonthSelect} />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PeriodSelector;
