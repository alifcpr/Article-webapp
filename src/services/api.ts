import axios from "./axios";
/* Types */
import { Login, SignUp } from "../types/types";
import axiosPrivate from "./axiosPrivate";

export const signUpApi = async ({ name, email, password }: SignUp) => {
  const { data } = await axios.post("/api/users/register", {
    name,
    email,
    password,
  });
  return data;
};

export const loginApi = async ({ email, password }: Login) => {
  const { data } = await axios.post("/api/users/login", { email, password });
  return data;
};

export const getUserProfileApi = async () => {
  const { data } = await axiosPrivate.get("/api/users/profile");
  return data;
};
