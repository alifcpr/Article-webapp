import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import useTitle from "../../hook/useTitle";

const LoginPage = () => {
  useTitle("Login");
  return (
    <div className="h-[calc(100vh-10vh)] flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
