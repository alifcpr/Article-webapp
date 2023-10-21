import BreadCrumb from "../BreadCrumb";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPostByIdApi } from "../../services/api";
import { BlogDetailType } from "../../types/types";
import Loading_V2 from "../Loadings/Loading_V2";
import stables from "../constants/stables";
import { useState, useEffect } from "react";
import parseJsonToHtml from "../pareJsonToHtml";
import Editor from "../Editor/Editor";
import Comments from "../comments/Comments";
import AddCommentForm from "../comments/AddCommentForm";

const BlogDetail = () => {
  const { blogSlug } = useParams();
  const [bodyy, setBodyy] = useState<any | undefined>(undefined);

  const {
    data: blogData,
    isLoading: blogLoading,
    isError: blogError,
  }: {
    data: BlogDetailType | undefined;
    isLoading: boolean;
    isError: boolean;
  } = useQuery({
    queryKey: ["blog-detail", blogSlug],
    queryFn: () => getPostByIdApi({ slug: blogSlug! }),
  });

  console.log(blogData);

  if (blogLoading) {
    return (
      <div className="col-span-12 flex items-center justify-center md:col-span-12 xl:col-span-8">
        <Loading_V2 />
      </div>
    );
  }

  return (
    <div className="col-span-12 md:col-span-12 xl:col-span-8">
      <BreadCrumb />
      <div className="border px-4 shadow-lg py-3 rounded-lg">
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={stables.UPLOAD_FOLDER_BASE_URL + blogData?.photo}
            className="w-full h-[505px] object-cover object-center"
          />
        </div>
        <h1 className="font-bold text-3xl my-4 xl:text-4xl">
          {blogData?.title}
        </h1>
        <div>
          <Editor content={blogData?.body} editable={false} />
        </div>
      </div>
      <AddCommentForm />
      <Comments allComments={blogData?.comments} />
    </div>
  );
};

export default BlogDetail;
