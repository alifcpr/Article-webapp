import React, { useEffect, useRef } from "react";
import useDrawer from "../hook/useDrawer";
import Logo from "../assets/Logo.jpg";
import useClickOutSide from "../hook/useClickOutSide";

const Drawer = () => {
  const { openDrawer, setOpenDrawer } = useDrawer();

  const ref = useClickOutSide(setOpenDrawer);

  return (
    <div
      className={`fixed inset-0 transition-all duration-300 backdrop-blur-sm opacity-0 pointer-events-none ${
        openDrawer && "opacity-100 pointer-events-auto"
      } xl:hidden`}
    >
      <div
        ref={ref}
        className={`absolute w-2/3 h-full transition-all duration-300 bg-white shadow-2xl ${
          openDrawer ? "right-0 top-0" : "-right-full top-0"
        } md:w-1/2`}
      >
        <div className="flex justify-between items-center px-2 py-3 md:px-3 md:py-4">
          <img src={Logo} alt="Logo" className="scale-75 md:scale-90" />
          <button onClick={() => setOpenDrawer(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
