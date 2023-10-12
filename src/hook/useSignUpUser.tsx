import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signUpApi } from "../services/api";
import { toast } from "react-hot-toast";
import { SignUp, User, getError } from "../types/types";

const useSignUpUser = () => {
  const navigate = useNavigate();
  const { isLoading: isCreating, mutate: createUser } = useMutation({
    mutationFn: ({ name, email, password }: SignUp) =>
      signUpApi({ name, email, password }),
    onSuccess: (data: User) => {
      console.log(data);
      toast.success(`"${data.name}" Your Account is successfully created !`);
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
