import React from "react";
import SearchFilter from "../filters/SearchFilter";
import TagsContainer from "../tags/TagsContainer";
import LandingPooster from "../../assets/LandingPooster.jpg";

const LadingInfo = () => {
  return (
    <div className="grid grid-cols-12 mt-16">
      <div className="col-span-12 p-2 flex flex-col items-center justify-center gap-y-6 xl:gap-y-6 xl:col-span-6">
        <h1 className=" text-4xl text-center font-bold font-opensans md:px-2 md:text-5xl xl:text-left xl:p-0 ">
          Read the most interesting articles
        </h1>
        <p className="text-center text-dark-light text-lg font-opensans leading-9 md:text-xl md:px-10 xl:text-left xl:p-0 xl:leading-9 xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <SearchFilter />
        <TagsContainer />
      </div>
      <div className="hidden md:block xl:col-span-6 xl:bg-red-500">
        <div>
          <img
            src={LandingPooster}
            className="w-full h-full object-cover object-center "
          />
        </div>
      </div>
    </div>
  );
};

export default LadingInfo;
