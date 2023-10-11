import { string, object, ref } from "yup";

export const signUpValidation = object().shape({
  name: string().required("name is required"),
  email: string().required("email is required"),
  password: string()
    .min(8, "password must be 8 characters")
    .required("password is required"),
  confirmPassword: string()
    .required("confirm password is required")
    .oneOf([ref("password")], "password does not match"),
});

export const loginValidation = object().shape({
  email: string().required("email is required"),
  password: string()
    .min(8, "password must be 8 characters")
    .required("password is required"),
});
