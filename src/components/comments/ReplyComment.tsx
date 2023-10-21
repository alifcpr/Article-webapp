import React from "react";
import { replayCommentsType } from "../../types/types";
import stables from "../constants/stables";

const ReplyComment = ({ allReplies }: { allReplies: replayCommentsType }) => {
  return (
    <div className="flex gap-x-4 w-full bg-gray-100 rounded-lg mt-3 p-3">
      <div className="w-10 h-10 rounded-full bg-red-500 overflow-hidden md:w-12 md:h-12 xl:w-14 xl:h-14">
        <img
          src={stables.UPLOAD_FOLDER_BASE_URL + allReplies.user.avatar}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-4 flex-1">
        <div className="flex flex-col gap-y-2 items-start justify-between">
          <div>
            <h1 className="text-sm font-semibold md:text-base xl:text-md">
              {allReplies?.user?.name}
            </h1>
            <p className="text-sm text-slate-500 md:text-base xl:text-md">
              {new Date(allReplies?.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
              })}
            </p>
          </div>
          <p className="mt-2 font-opensans text-slate-700 text-justify text-sm md:text-base">
            {allReplies.desc}
          </p>
          {auth.login ? (
            <div className="flex gap-x-7 mt-5 font-opensans">
              <button className="flex gap-x-1 items-center hover:text-primary text-sm md:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <span className="font-semibold">Reply</span>
              </button>
              {auth.userId === allReplies?.user?._id ? (
                <button className="flex gap-x-1 items-center hover:text-slate-500 text-sm md:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  <span className="font-semibold">Edit</span>
                </button>
              ) : null}
              {auth.userId === allReplies?.user?._id ? (
                <button className="flex gap-x-1 items-center hover:text-red-500 text-sm md:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <span className="font-semibold">Delete</span>
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
