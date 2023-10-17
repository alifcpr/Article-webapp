import React from "react";
import useGetAllBlogs from "../../hook/fetching/useGetAllBlogs";
import Loading from "../Loadings/Loading";
import SideBarCart from "./SideBarCart";
import Loading_V2 from "../Loadings/Loading_V2";
import SideBarBadge from "./SideBarBadge";

const BlogSideBar = () => {
  const { allBlogs, allBlogsLoading } = useGetAllBlogs();

  const tags = [
    "Medical",
    "Lifestyle",
    "Learn",
    "Healthy",
    "Food",
    "Diet",
    "Education",
  ];

  return (
    <div className="col-span-12 shadow-2xl p-4 rounded-lg md:col-span-12 xl:col-span-4">
      <h1 className="font-opensans font-semibold mb-5 md:text-xl xl:text-2xl">
        Latest Article
      </h1>
      <div>
        {allBlogsLoading ? (
          <div className="h-[100px] flex items-center justify-center">
            <Loading_V2 />
          </div>
        ) : (
          <div className="flex flex-col gap-y-8 md:flex-row md:flex-wrap md:gap-x-9">
            {allBlogs?.map((blog) => (
              <SideBarCart cartInfo={blog} />
            ))}
          </div>
        )}
      </div>
      <div>
        <h1 className="font-opensans font-semibold my-5 md:text-xl xl:text-2xl">
          Tags
        </h1>
        <div className="flex flex-wrap gap-3 items-center">
            {tags.map((tag) => <SideBarBadge>{tag}</SideBarBadge>)}
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
