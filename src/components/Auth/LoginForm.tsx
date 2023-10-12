/* validation */
import { loginValidation } from "../../validation";
import { Formik, ErrorMessage, Field, Form } from "formik";

import { Link } from "react-router-dom";

/* types */
import { Login } from "../../types/types";
/* components */
import Loading from "../Loading";
/* hooks */
import useLoginUser from "../../hook/useLoginUser";

const LoginForm = () => {
  const { isGetting, getUserInfo } = useLoginUser();

  const handleLogin = ({ email, password }: Login) => {
    getUserInfo({ email, password });
  };

  return (
    <div>
      <h1 className="font-opensans text-4xl text-center font-bold mb-14">
        Login
      </h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(data: Login) => handleLogin(data)}
        validationSchema={loginValidation}
      >
        {(formik) => (
          <Form
            autoComplete="off"
            className="flex flex-col gap-y-4 font-opensans w-[360px]"
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-semibold text-dark-light">
                Email address
              </label>
              <Field
                type="text"
                disabled={isGetting}
                name="email"
                id="email"
                placeholder="Enter email"
                className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
              />
              <ErrorMessage
                name="email"
                render={(msg) => <p className="text-red-500 text-sm">{msg}</p>}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="password"
                className=" font-semibold text-dark-light"
              >
                Password
              </label>
              <Field
                type="text"
                disabled={isGetting}
                name="password"
                id="password"
                placeholder="Enter password"
                className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
              />
              <ErrorMessage
                name="password"
                render={(msg) => <p className="text-red-500 text-sm">{msg}</p>}
              />
            </div>

            <span className="text-primary font-semibold my-2">
              Forgot password
            </span>
            <button
              type="submit"
              disabled={!formik.isValid}
              className={`bg-primary disabled:opacity-80 rounded-lg text-white font-semibold flex items-center justify-center ${
                isGetting ? "py-4" : "py-3"
              }`}
            >
              {isGetting ? <Loading /> : "Login"}
            </button>
            <div className="flex items-center font-semibold gap-x-2 mt-2 text-sm">
              <span>You Do Not Have An Account ?</span>
              <Link to={"/sign-up"} className="text-primary font-bold">
                Register now
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
