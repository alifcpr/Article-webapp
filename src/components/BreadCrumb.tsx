import React from "react";
import { Link } from "react-router-dom";

type breadCrumbInputs = {
  href: string;
  label: string;
};

const BreadCrumb = ({
  breadCrumbRoutes,
}: {
  breadCrumbRoutes: breadCrumbInputs[];
}) => {
  return (
    <div className="mb-4 font-opensans flex gap-x-4 items-center text-slate-400">
      {breadCrumbRoutes.map((route, index) => (
        <>
          <Link
            to={route.href}
            className={`${
              index + 1 === breadCrumbRoutes.length
                ? "pointer-events-none text-black font-semibold"
                : " transition-all duration-75 hover:text-black hover:scale-105"
            }`}
          >
            {route.label}
          </Link>
          {console.log(index)}
          <p className="">
            {index + 1 === breadCrumbRoutes.length ? null : "/"}
          </p>
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;
