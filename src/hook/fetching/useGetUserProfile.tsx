import { useQuery } from "react-query";
import { getUserProfileApi } from "../../services/api";
const useGetUserProfile = () => {
  const { data } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUserProfileApi(),
    onSuccess: () => {
      console.log("data", data);
    },
    enabled: !!localStorage.getItem("token"),
  });
};

export default useGetUserProfile;
