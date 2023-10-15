import BlogCart from "./BlogCart";
import { useSearchParams } from "react-router-dom";
import Loading_V2 from "../Loadings/Loading_V2";
import useGetAllBlogs from "../../hook/fetching/useGetAllBlogs";

const BlogsContainer = () => {
  const [searchParams] = useSearchParams();

  const { allBlogs, allBlogsLoading, isError } = useGetAllBlogs();

  if (allBlogsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading_V2 />
      </div>
    );
  }

  if (isError) {
    return (
      <div className=" h-[400px] flex flex-col gap-y-6 items-center justify-center">
        <h1 className="text-4xl font-opensans text-red-500">
          We Have An Error
        </h1>
        <button
          onClick={() => location.reload()}
          className="flex gap-x-2 border-2 border-primary text-primary rounded-lg px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-white"
        >
          <span className="font-opensans font-bold">Rerfresh Page</span>
        </button>
      </div>
    );
  }

  if (allBlogs?.length === 0) {
    return (
      <div className=" h-[400px] flex flex-col gap-y-3 items-center justify-center">
        <h1 className="font-opensans text-2xl font-bold">
          Your Search : " {searchParams.get("searchKeyword")} "
        </h1>
        <h1 className="text-3xl font-opensans text-red-500">
          No articles were found based on your filter
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-16">
        {allBlogs?.map((blogData) => (
          <BlogCart info={blogData} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-12">
        <button className="flex gap-x-2 border-2 border-primary text-primary rounded-lg px-3 py-2 transition-all duration-300 hover:bg-primary hover:text-white">
          <span className="font-opensans font-bold">More articles</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default BlogsContainer;
