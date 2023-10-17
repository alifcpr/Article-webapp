import React from "react";
import FooterCart from "./FooterCart";
import { useLocation, useParams } from "react-router-dom";

const FooterTop = () => {
  const { pathname } = useLocation();
  const { blogSlug } = useParams();

  if (pathname === `/blog/${blogSlug}`) {
    return null;
  }

  return (
    <div className="grid grid-cols-12 bg-dark-hard w-full">
      <div className="col-span-12 hidden md:flex md:itesm-center md:justify-center md:relative md:my-10 xl:col-span-6">
        <div className="w-40 h-40 bg-red-400 rounded-lg absolute top-5 right-12 -z-2"></div>
        <FooterCart />
        <div className="w-44 h-44 bg-dark-soft rounded-lg absolute -bottom-6 left-14 -z-2"></div>
      </div>
      <div className="col-span-12 flex flex-col items-center justify-center px-3 gap-y-9 md:order-first md:mt-5 xl:col-span-6">
        <h1 className="font-opensan text-slate-200 text-2xl font-bold md:text-4xl md:text-center xl:text-start">
          Get our stories delivered From us to your inbox weekly.
        </h1>
        <div className="flex flex-col gap-y-4 w-full md:flex-row md:items-center md:justify-center md:gap-x-2 xl:justify-start">
          <input
            type="text"
            placeholder="Your Email"
            className="p-2 rounded-lg font-opensans md:w-1/2"
          />
          <button className="bg-primary p-2 text-white font-opensans font-bold rounded-lg">
            Get started
          </button>
        </div>
        <div className="font-opensans text-slate-400 leading-7 md:text-center xl:text-start">
          <span className="text-slate-100 font-bold md:text-slate-400 md:font-normal">
            Get a response tomorrow
          </span>
          if you submit by 9pm today. If we received after 9pm will get a
          reponse the following day.
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
