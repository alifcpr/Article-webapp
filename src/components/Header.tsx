import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <h1 className="font-opensans text-xl font-bold">Logo</h1>
      <div className="hidden font-opensans font-semibold text-dark-light xl:flex xl:gap-x-12 xl:items-center">
        <div>Home</div>
        <div>Pages</div>
        <div>Pricing</div>
        <div>Faq</div>
        <button className="rounded-2xl border-2 border-primary px-4 py-2 ml-3 transition-all duration-300 text-primary hover:bg-primary hover:text-white">
            Sign In
        </button>
      </div>
      <div className="block xl:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
