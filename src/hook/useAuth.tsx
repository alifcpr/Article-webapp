import { useContext } from "react";
import { AuthInfo } from "../context/AuthProvider";

const useAuth = () => {
  return useContext(AuthInfo);
};

export default useAuth;
