import React from "react";
import { BlogsType } from "../../types/types";
import stables from "../constants/stables";
import { Link } from "react-router-dom";

type Props = { cartInfo: BlogsType };
const SideBarCart = ({ cartInfo }: Props) => {
  return (
    <Link
      to={`/blog/${cartInfo.slug}`}
      className="flex hover:bg-slate-200 w-full rounded-lg items-center gap-x-3"
    >
      <div className="w-24 h-24 overflow-hidden rounded-xl ">
        <img
          src={stables.UPLOAD_FOLDER_BASE_URL + cartInfo.photo}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-4 justify-center h-full">
        <h1 className="font-opensans text-base line-clamp-2 font-semibold md:text-lg ">
          {cartInfo.title}
        </h1>
        <p className="font-opensnas text-slate-400">{`${new Date(
          cartInfo.createdAt
        ).toLocaleString("default", { month: "long" })} ${new Date(
          cartInfo.createdAt
        ).getDay()} , ${new Date(cartInfo.createdAt).getFullYear()}`}</p>
      </div>
    </Link>
  );
};

export default SideBarCart;
