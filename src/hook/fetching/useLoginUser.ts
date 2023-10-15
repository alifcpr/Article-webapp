import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/api";
import { toast } from "react-hot-toast";
import { Login, getError, User } from "../../types/types";
import useAuth from "../useAuth";

const useLoginUser = () => {
  
  type variableType = {
    isLoading: boolean;
    mutate: (data: Login) => void;
  };

  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const { isLoading: isGetting, mutate: getUserInfo }: variableType =
    useMutation({
      mutationFn: ({ email, password }: Login) => loginApi({ email, password }),
      onSuccess: (data: User) => {
        const { admin, token } = data;
        toast.success(`Welcome Back "${data.name}"`);
        setAuth({ admin, token, login: true });
        localStorage.setItem("token", token);
        navigate("/");
      },
      onError: ({ response }: getError) => {
        const message = response.data.message;
        toast.error(message);
      },
    });
  return { isGetting, getUserInfo };
};

export default useLoginUser;
