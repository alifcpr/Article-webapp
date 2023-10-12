import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../services/api";
import { toast } from "react-hot-toast";
import { SignUp, User, getError } from "../types/types";
import useAuth from "./useAuth";

const useSignUpUser = () => {

  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const { isLoading: isCreating, mutate: createUser } = useMutation({
    
    mutationFn: ({ name, email, password }: SignUp) =>
      signUpApi({ name, email, password }),

    onSuccess: (data: User) => {
      const { admin, token } = data;
      toast.success(`"${data.name}" Your Account is successfully created !`);
      setAuth({ admin, token, login: true });
      localStorage.setItem("token", token);
      navigate("/");
    },
    onError: ({ response }: getError) => {
      console.log(response);
      const message = response.data.message;
      toast.error(message);
    },
  });
  return { isCreating, createUser };
};

export default useSignUpUser;
