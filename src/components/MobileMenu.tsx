import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import useAuth from "../hook/useAuth";

const MobileMenu = () => {
  const { auth, setAuth } = useAuth();

  const handleLogOut = () => {
    console.log("hi");
  };

  return (
    <>
      <Drawer>
        <div className="flex flex-col ">
          <div className="font-opensans flex flex-col gap-y-4 items-center font-semibold text-dark-light xl:flex xl:gap-x-4 xl:items-center">
            {auth.login ? null : (
              <Link
                to={"/sign-up"}
                className="rounded-3xl border-2 border-primary px-8 py-2 ml-3 transition-all duration-300 text-primary hover:bg-primary hover:text-white"
              >
                Sign Up
              </Link>
            )}
            {auth.login && (
              <div className="relative group">
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

                <div className="hidden my-2 ml-3 group-hover:block">
                  <ul className="bg-white p-2 flex flex-col gap-y-4 items-center justify-center shadow-xl rounded-lg transition-all duration-300">
                    {auth.admin && (
                      <li>
                        <Link to={"/admin"}>Admin Dashboard</Link>
                      </li>
                    )}
                    <li>
                      <Link to={"/profile"}>Profile</Link>
                    </li>
                    <li>
                      <button onClick={handleLogOut}>LogOut</button>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <Link to={"/"} className="py-2 px-7">
              Home
            </Link>
            {/* here */}
            <div className="relative group">
              <div className="relative flex items-center gap-x-1 cursor-pointer px-8 py-2 ml-3">
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
                </div>
              </div>

              <div className="hidden my-2 ml-3 group-hover:block">
                <ul className="bg-white p-2 flex flex-col gap-y-4 items-center justify-center shadow-xl rounded-lg transition-all duration-300">
                  <li>
                    <Link to={"/contact-us"}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={"/about"}>About</Link>
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
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MobileMenu;
