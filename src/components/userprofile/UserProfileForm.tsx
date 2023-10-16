import defaultUserProfile from "../../assets/user.png";
import Loading from "../Loadings/Loading";
import useGetProfileDetail from "../../hook/fetching/useGetProfileDetail";
import useUpdateProfile from "../../hook/fetching/useUpdateProfile";

function UserProfileForm() {
  const {
    isGettingProfile,
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    avatar,
  } = useGetProfileDetail();

  const { updateProfile, updateProfileLoading } = useUpdateProfile();

  const updateHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile({ name, email, password });
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-10vh)]">
      <div className="border-2 flex flex-col gap-y-5 shadow-lg w-[400px] p-4 rounded-lg">
        <div
          className={`flex items-center ${
            avatar ? "justify-between" : "justify-center"
          }`}
        >
          <button
            disabled={isGettingProfile || updateProfileLoading}
            className="w-20 h-20 disabled:opacity-80 rounded-full"
          >
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
        <form
          onSubmit={updateHandler}
          className="flex flex-col gap-y-6"
          autoComplete="off"
        >
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
              disabled={isGettingProfile || updateProfileLoading}
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
              disabled={isGettingProfile || updateProfileLoading}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="name"
              disabled={isGettingProfile || updateProfileLoading}
              placeholder="Enter New Password"
              className="border-2 px-5 py-4 text-md font-semibold rounded-lg focus:outline-none focus:border-primary disabled:bg-slate-100"
            />
          </div>

          <button
            disabled={updateProfileLoading || updateProfileLoading}
            className={`bg-primary p-3 rounded-lg text-white font-opensans ${
              updateProfileLoading ? "flex itesm-center justify-center p-4" : ""
            }`}
          >
            {updateProfileLoading ? <Loading /> : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserProfileForm;
