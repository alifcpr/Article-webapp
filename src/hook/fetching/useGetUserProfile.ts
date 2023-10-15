import { useQuery } from "react-query";
import { getUserProfileApi } from "../../services/api";
import useAuth from "../useAuth";
import { User } from "../../types/types";
const useGetUserProfile = () => {
  const { setAuth } = useAuth();

  type variableType = {
    data: User | undefined;
  };

  const { data: userProfile }: variableType = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserProfileApi(),
    onSuccess: (data: User) => {
      const { admin, token } = data;
      setAuth({ login: true, admin, token });
      console.log("data", data);
    },
    enabled: !!localStorage.getItem("token"),
  });

  return { userProfile };
};

export default useGetUserProfile;
