import { useState } from "react";
import { useQuery } from "react-query";
import { getUserProfileApi } from "../../services/api";
import { User } from "../../types/types";
import defaultUserProfile from "../../assets/user.png";
import Loading from "../Loadings/Loading";

function UserProfileForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const { data: userProfileData, isFetching: isGettingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getUserProfileApi(),
    onSuccess: (data: User) => {
      const { name, email, avatar } = data;
      setName(name);
      setEmail(email);
      setAvatar(avatar);
    },
    enabled: !!localStorage.getItem("token"),
  });

  if (isGettingProfile) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-10vh)]">
        <h1 className="font-opensans text-2xl">Loading...</h1>
      </div>
    );
  }

//   const uploadProfileHandler = () => {};

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10vh)]">
      <div className="border-2 flex flex-col gap-y-5 shadow-lg w-[400px] p-4 rounded-lg">
        <div
          className={`flex items-center ${
            avatar ? "justify-between" : "justify-center"
          }`}
        >
          <button className="w-20 h-20 rounded-full">
            <img
              src={avatar ? avatar : defaultUserProfile}
              className="w-full h-full object-cover object-center"
            />
          </button>
          {avatar ? (
            <button className="font-opensans border px-2 py-1 rounded-lg border-red-500 text-red-500 transition-all duration-300 text-sm hover:bg-red-500 hover:text-white">
              Delete Image
            </button>
          ) : null}
        </div>
        <form className="flex flex-col gap-y-6" autoComplete="off">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className=" font-semibold text-dark-light">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              disabled={isGettingProfile}
              className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="email" className=" font-semibold text-dark-light">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              disabled={isGettingProfile}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className=" font-semibold text-dark-light">
              New Password (Optional)
            </label>
            <input
              type="text"
              name="name"
              id="name"
              disabled={isGettingProfile}
              placeholder="Enter New Password"
              className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
            />
          </div>

          <button className="bg-primary p-3 rounded-lg text-white font-opensans">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserProfileForm;
