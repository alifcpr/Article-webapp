import { Link } from "react-router-dom";

/* Assets */
import Logo from "../assets/Logo.jpg";

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <Link to={"/"}>
        <img src={Logo} alt="Logo" />
      </Link>
      <div className="hidden font-opensans font-semibold text-dark-light xl:flex xl:gap-x-4 xl:items-center">
        <Link to={"/saf"} className="py-2 px-7">
          Home
        </Link>
        <div className="py-2 group px-7 flex gap-x-1 cursor-pointer items-center relative">
          <span>Pages</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
            <ul className="bg-white shadow-xl border rounded-lg w-[200px] flex flex-col gap-y-2 items-center absolute -left-9 p-3 transition-all duration-300 opacity-0 pointer-events-none top-4 group-hover:top-full group-hover:opacity-100 group-hover:pointer-events-auto">
              <li>
                <Link
                  to={"/contact-us"}
                  className="hover:bg-slate-200 px-7 text-black py-1 rounded-lg"
                >
                  ContactUs
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className="hover:bg-slate-200 px-7 text-black py-1 rounded-lg"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to={"/pricing"} className="py-2 px-7">
          Pricing
        </Link>
        <Link to={"/faq"} className="py-2 px-7">
          Faq
        </Link>
        <Link
          to={"/sign-up"}
          className="rounded-3xl border-2 border-primary px-8 py-2 ml-3 transition-all duration-300 text-primary hover:bg-primary hover:text-white"
        >
          Sign Up
        </Link>
        <div className="hidden relative group">
          <div className="rounded-3xl relative flex items-center gap-x-1 cursor-pointer border-2 border-primary px-8 py-2 ml-3 transition-all duration-300 text-primary hover:bg-primary hover:text-white">
            <span>Account</span>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="absolute left-1 top-full w-full opacity-0 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
            <ul className="bg-white p-2 flex flex-col gap-y-4 items-center justify-center shadow-xl rounded-lg transition-all duration-300 -translate-y-4  group-hover:translate-y-2">
              <li>
                <Link to={"/admin"}>Admin Dashboard</Link>
              </li>
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/logout"}>LogOut</Link>
              </li>
            </ul>
          </div>
        </div>
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
