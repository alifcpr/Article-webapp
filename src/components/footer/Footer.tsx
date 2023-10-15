import { useLocation } from "react-router-dom";
import FooterCart from "./FooterCart";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (
    pathname === "/sign-up" ||
    pathname === "/login" ||
    pathname === "/profile"
  ) {
    return null;
  }

  return (
    <footer className="">
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>
      <div className="bg-dark-hard">
        <div className="max-w-sm sm:max-w-xl md:max-w-2xl xl:max-w-7xl mx-auto p-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
