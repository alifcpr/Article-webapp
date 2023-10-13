import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const SearchFilter = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.length > 0) {
      searchParams.set("search", inputValue);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="mt-10 w-full md:relative xl:mt-3">
      <div className="flex items-center gap-x-2 shadow-xl px-3 rounded-lg md:py-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search article"
          className="font-opensans font-bold italic p-3 w-full focus:outline-none"
        />
      </div>
      <button
        onClick={handleSearch}
        className="bg-primary w-full p-3 text-white font-opensans font-bold rounded-lg mt-2 md:absolute md:top-0 md:right-2 md:w-max"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
