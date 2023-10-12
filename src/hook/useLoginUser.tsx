import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../services/api";
import { toast } from "react-hot-toast";
import { Login, getError, User } from "../types/types";

const useLoginUser = () => {
  const navigate = useNavigate();

  const { isLoading: isGetting, mutate: getUserInfo } = useMutation({
    mutationFn: ({ email, password }: Login) => loginApi({ email, password }),
    onSuccess: (data: User) => {
      toast.success(`Welcome Back "${data.name}"`);
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
