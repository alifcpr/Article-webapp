/* hook */
import SignUpForm from "../../components/Auth/SignUpForm";
import useTitle from "../../hook/useTitle";

const SignUpPage = () => {
  useTitle("Sign Up");
  return (
    <div className="h-[calc(100vh-10vh)] flex items-center justify-center">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
