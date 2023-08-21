import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const DropDown = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Accordion Box 1",
      content: "Content for Accordion Box 1",
    },
    {
      title: "Accordion Box 2",
      content: "Content for Accordion Box 2",
    },
    {
      title: "Accordion Box 3",
      content: "Content for Accordion Box 3",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {accordionData.map((item, index) => (
        <div key={index} className="bg-indigo-500 rounded p-2 m-3 ml-0 shadow-xl">
          <button
            className="flex justify-between items-center w-full p-2 bg-indigo-500 text-white font-semibold"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span
              className={`transition  duration-300 ease-in-out${
                activeIndex === index ? " " : " rotate-180"
              } `}
            >
              {activeIndex === index ? (
                <IoIosArrowDown className="w-4 h-4" />
              ) : (
                <IoIosArrowForward className="w-4 h-4" />
              )}
            </span>
          </button>
          {activeIndex === index && (
            <div className="bg-indigo-100 p-2 ">
              <p className=" text-indigo-500 p-5 m-3 bg-gray-100 rounded-xl shadow-2xl ">
                {item.content}
              </p>
              <p className="text-indigo-500 p-5 m-3 bg-gray-100 rounded-xl shadow-2xl">
                {item.content}
              </p>
              <p className="text-indigo-500 p-4 m-3 bg-gray-100 rounded-xl shadow-2xl">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
