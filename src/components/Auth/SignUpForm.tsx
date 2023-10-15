/* react-router-dom */
import { Link } from "react-router-dom";
/* validtion */
import { signUpValidation } from "../../validation";
import { Formik, Form, ErrorMessage, Field } from "formik";
/* Type */
import { SignUp } from "../../types/types";
/* components */
import Loading from "../Loadings/Loading";
import useSignUpUser from "../../hook/fetching/useSignUpUser";

const SignUpForm = () => {
  const { isCreating, createUser } = useSignUpUser();

  const handleSignUp = ({ name, email, password }: SignUp) => {
    createUser({ name, email, password });
  };

  return (
    <div>
      <h1 className="font-opensans text-4xl text-center font-bold mb-14">
        SignUp
      </h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(data: SignUp) => handleSignUp(data)}
        validationSchema={signUpValidation}
      >
        {(formik) => (
          <Form
            autoComplete="off"
            className="flex flex-col gap-y-4 font-opensans w-[360px]"
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-semibold text-dark-light">
                Name
              </label>
              <Field
                type="text"
                disabled={isCreating}
                name="name"
                id="name"
                placeholder="Enter name"
                className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
              />
              <ErrorMessage
                name="name"
                render={(msg) => <p className="text-red-500 text-sm">{msg}</p>}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="font-semibold text-dark-light">
                Email address
              </label>
              <Field
                type="text"
                disabled={isCreating}
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
                disabled={isCreating}
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
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="confirmPassword"
                className=" font-semibold text-dark-light"
              >
                Confirm password
              </label>
              <Field
                type="text"
                disabled={isCreating}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter confirm password"
                className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
              />
              <ErrorMessage
                name="confirmPassword"
                render={(msg) => <p className="text-red-500 text-sm">{msg}</p>}
              />
            </div>
            <span className="text-primary font-semibold my-2">
              Forgot password
            </span>
            <button
              type="submit"
              disabled={!formik.isValid || isCreating}
              className={`bg-primary disabled:opacity-80 rounded-lg text-white font-semibold flex items-center justify-center ${
                isCreating ? "py-4" : "py-3"
              }`}
            >
              {isCreating ? <Loading /> : "Register"}
            </button>
            <div className="flex items-center font-semibold gap-x-2 mt-2 text-sm">
              <span>You have an account ?</span>
              <Link to={"/login"} className="text-primary font-bold">
                Login now
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
