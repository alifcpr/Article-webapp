import React from "react";
import BlogCart from "./BlogCart";

const BlogsContainer = () => {

  


  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-16">
        <BlogCart />
        <BlogCart />
        <BlogCart />
        <BlogCart />
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className="flex gap-x-2 border-2 border-primary text-primary rounded-lg px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-white">
          <span className="font-opensans font-bold">
            More articles
          </span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default BlogsContainer;
