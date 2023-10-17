import React, { useState } from "react";
import { getUserProfileApi } from "../../services/api";
import { useQuery } from "react-query";
import { User } from "../../types/types";

const useGetProfileDetail = () => {
  type variableType = {
    data: User | undefined;
    isFetching: boolean;
  };

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const { data: userProfileData, isFetching: isGettingProfile }: variableType =
    useQuery({
      queryKey: ["profile"],
      queryFn: () => getUserProfileApi(),
      onSuccess: (data: User) => {
        const { name, email, avatar } = data;
        setName(name);
        setEmail(email);
        setAvatar(avatar);
        console.log(data);
      },
      enabled: !!localStorage.getItem("token"),
      refetchOnWindowFocus: false,
    });
  return {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    avatar,
    setAvatar,
    userProfileData,
    isGettingProfile,
  };
};

export default useGetProfileDetail;
