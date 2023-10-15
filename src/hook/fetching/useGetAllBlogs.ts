import { useSearchParams } from "react-router-dom";
import { getAllPostsApi } from "../../services/api";
import { useQuery } from "react-query";
import { BlogsType } from "../../types/types";

const useGetAllBlogs = () => {
  type variableType = {
    data: BlogsType[] | undefined;
    isLoading: boolean;
    isError: boolean;
  };

  const [searchParams] = useSearchParams();

  let searchKeyword: string = searchParams.get("searchKeyword") || "";
  let page: number = Number(searchParams.get("page")) || 1;
  let limit: number = 10;

  const {
    data: allBlogs,
    isLoading: allBlogsLoading,
    isError,
  }: variableType = useQuery({
    queryKey: ["blogs", searchKeyword, page, limit],
    queryFn: () => getAllPostsApi(searchKeyword, page, limit),
  });

  return { allBlogs, allBlogsLoading, isError };
};

export default useGetAllBlogs;
