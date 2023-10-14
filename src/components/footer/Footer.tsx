import { useLocation } from "react-router-dom";
import FooterCart from "./FooterCart";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/sign-up" || pathname === "/login") {
    return null;
  }

  return (
    <footer className="flex flex-col">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 490"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stop-color="#0D2436"></stop>
            <stop offset="95%" stop-color="#0D2436"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,500 C 0,500 0,250 0,250 C 205.71428571428572,321.42857142857144 822.8571428571429,285.7142857142857 1440,250 C 1440,250 1440,500 1440,500 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
      <FooterTop />
      <FooterBottom />
      <div className="bg-dark-hard flex flex-col items-center  justify-center py-8 gap-y-4">
        <div className=" w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </div>
          <h1 className="text-slate-500 font-bold italic">
          Copyright © 2023. Crafted with love.
          </h1>
      </div>
    </footer>
  );
};

export default Footer;
