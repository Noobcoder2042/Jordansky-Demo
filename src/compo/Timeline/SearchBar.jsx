import React from "react";

const SearchBar = () => {
  return (
    <div>
      <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
        <div className="overflow-hidden z-0 rounded-full relative p-3">
          <form
            role="form"
            className="relative flex z-50 bg-white rounded-full"
          >
            <input
              type="text"
              placeholder="enter your search here"
              className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
            />
            <button className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
              Search
            </button>
          </form>
       
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
