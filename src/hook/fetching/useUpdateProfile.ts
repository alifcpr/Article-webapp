import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateProfileApi } from "../../services/api";
import { toast } from "react-hot-toast";
import { SignUp } from "../../types/types";

const useUpdateProfile = () => {
  type variableType = {
    mutate: (data: SignUp) => void;
    isLoading: boolean;
  };

  const queryClient = useQueryClient();

  const {
    mutate: updateProfile,
    isLoading: updateProfileLoading,
  }: variableType = useMutation({
    mutationFn: ({ name, email, password }: SignUp) =>
      updateProfileApi({ userData: { name, email, password } }),
    onSuccess: () => {
      toast.success("profile updated");
      queryClient.invalidateQueries(["profile"]);
    },
  });

  return { updateProfile, updateProfileLoading };
};

export default useUpdateProfile;
