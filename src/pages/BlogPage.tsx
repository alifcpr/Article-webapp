import React from "react";
import { useParams } from "react-router-dom";
import BlogDetail from "../components/blogDetail/BlogDetail";
import BlogSideBar from "../components/blogDetail/BlogSideBar";

const BlogPage = () => {
  const { blogSlug } = useParams();

  return (
    <div className="mt-28 grid grid-cols-12 p-4 gap-7">
      <BlogDetail />
      <BlogSideBar />
    </div>
  );
};

export default BlogPage;
