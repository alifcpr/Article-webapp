import axios from "./axios";
/* Types */
import { Login, SignUp } from "../types/types";
import axiosPrivate from "./axiosPrivate";

type SignUpApiType = { name: string; email: string; password: string };
export const signUpApi = async ({ name, email, password }: SignUpApiType) => {
  const { data } = await axios.post("/api/users/register", {
    name,
    email,
    password,
  });
  return data;
};

type LoginApiType = { email: string; password: string };
export const loginApi = async ({ email, password }: LoginApiType) => {
  const { data } = await axios.post("/api/users/login", { email, password });
  return data;
};

export const getUserProfileApi = async () => {
  const { data } = await axiosPrivate.get("/api/users/profile");
  return data;
};

export const getAllPostsApi = async (
  searchKeyword: string = "",
  page: number = 1,
  limit: number = 10
) => {
  const { data, headers } = await axios.get(
    `/api/posts?searchKeyword=${searchKeyword}&page=${page}&limit=${limit}`
  );
  return data;
};

export const updateProfileApi = async ({ userData }: { userData: any }) => {
  const { data } = await axiosPrivate.put("/api/users/updateProfile", userData);
  return data;
};

export const updateProfilePictureApi = async ({
  formData,
}: {
  formData: any;
}) => {
  const { data } = await axiosPrivate.put(
    "/api/users/updateProfilePicture",
    formData
  );
  return data;
};

export const getPostByIdApi = async ({ slug }: { slug: string }) => {
  const { data } = await axios.get(`/api/posts/${slug}`);
  return data;
};

export const createNewCommentApi = async ({
  desc,
  slug,
  parent,
  replayOnUser,
}: {
  desc: string;
  slug: string;
  parent: string | null;
  replayOnUser: string | null;
}) => {
  const { data } = await axiosPrivate.post("/api/comments", {
    desc,
    slug,
    parent,
    replayOnUser,
  });
  return data;
};
