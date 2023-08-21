import React from "react";
import Navbar from "../../compo/Navbar";
import Tnavbar from "../../compo/Timeline/Tnavbar";
import SearchBar from "../../compo/Timeline/SearchBar";

const TimeLineHome = () => {
  return (
    
      <div >
       
      
        <SearchBar />
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 h-[25vh] flex items-center justify-center text-6xl">
          Name of Customer / Vendor
        </div>
      </div>
    
  );
};

export default TimeLineHome;
