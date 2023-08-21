import React, { useState } from "react";
import Navbar from "../../compo/Navbar";
import Fnavbar from "../../compo/Financials/Fnavbar";
import PeriodSelector from "../../compo/Financials/PeriodSelector";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { BsCalendarDateFill } from "react-icons/bs";

const CashFlowStatement = () => {
  const [showPeriodSelector, setShowPeriodSelector] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedFiscalYear, setSelectedFiscalYear] = useState(null);
  const [selectedQuarter, setSelectedQuarter] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const togglePeriodSelector = () => {
    setShowPeriodSelector(!showPeriodSelector);
  };

  const handlePeriodChange = (selectedYear, selectedQtr, selectedMth) => {
    setSelectedFiscalYear(selectedYear);
    setSelectedQuarter(selectedQtr);
    setSelectedMonth(selectedMth);
  };

  const handleButtonSelect = (selectedButton) => {
    setSelectedButton(selectedButton);
  };

  return (
    <div className=" h-[110vh] 2xl:w-[1480px] xl:w-[1024px] lg:w-[1024px] md:w-[640px] sm:w-[460px] ml-[10vw] mr-[10vw] lg:ml-[7vw] lg:mr-[7vw] xl:ml-[7vw]  ">
      <Navbar />
      <Fnavbar />
      <div className="flex justify-end">
        <button
          className={`text-white py-2 px-4 rounded-lg shadow-lg ${
            showPeriodSelector ? "bg-indigo-900" : "bg-indigo-600"
          }`}
          onClick={togglePeriodSelector}
        >
          <span className="flex items-center gap-3 ">
            {selectedFiscalYear === null ? (
              <span className="mr-2 transition delay-150 duration-300 ease-in-out">
                Period Selector
              </span>
            ) : (
              selectedFiscalYear && (
                <div className="    px-1 text-center text-white">
                  <div>
                    <span className="">
                      {selectedFiscalYear &&
                        !selectedQuarter &&
                        !selectedMonth &&
                        `FY : ${selectedFiscalYear}`}
                      {selectedQuarter && (
                        <span>
                          {selectedQuarter === "Q1" &&
                            `Apr-Jun, ${selectedFiscalYear}`}
                          {selectedQuarter === "Q2" &&
                            `Jul-Sep, ${selectedFiscalYear}`}
                          {selectedQuarter === "Q3" &&
                            `Oct-Dec, ${selectedFiscalYear}`}
                          {selectedQuarter === "Q4" &&
                            `Jan-Mar, ${selectedFiscalYear}`}
                        </span>
                      )}
                      {selectedMonth &&
                        `${selectedMonth}, ${selectedFiscalYear}`}
                    </span>
                  </div>
                </div>
              )
            )}

            <BsCalendarDateFill />
          </span>
        </button>
        {showPeriodSelector ? (
          <button
            onClick={togglePeriodSelector}
            className=" transition delay-150 duration-300 ease-in-out bg-red-600 text-center text-white py-2 px-4 rounded-lg shadow-md shadow-red-500/50 text-xl mx-1"
          >
            <GrClose />
          </button>
        ) : (
          <button className="transition delay-150 duration-300 ease-in-out bg-indigo-600 text-center text-white py-2 px-4 rounded-lg shadow-xl text-xl mx-1">
            <span className="flex items-center  justify-center">
              {" "}
              <AiOutlineDoubleRight />
            </span>
          </button>
        )}

        {showPeriodSelector && (
          <div className="   absolute  xl:top-[140px] top-[150px] z-50">
            <PeriodSelector
              onPeriodChange={handlePeriodChange}
              onButtonSelect={handleButtonSelect}
            />
          </div>
        )}
      </div>
      <div className="bg-white mt-5 rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
        Cash Flow Statement
      </div>
      <div className="flex items-end justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-lg px-4 py-2 mr-2 transition duration-300 transform active:translate-y-1">
          Download
        </button>
        <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-lg px-4 py-2 transition duration-300 transform active:translate-y-1">
          Expand
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[45vh] flex items-center justify-center text-6xl">
        Particulars
      </div>
    </div>
  );
};

export default CashFlowStatement;
