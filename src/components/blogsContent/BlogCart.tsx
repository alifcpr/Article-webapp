import image from "../../assets/LandingPooster.jpg";
import bot from "../../assets/bot.png"

const BlogCart = () => {
  return (
    <div className="col-span-12  shadow-xl rounded-lg overflow-hidden bg-white md:col-span-6 xl:col-span-4">
      <div className="w-full h-[260px] overflow-hidden">
        <img
          src={bot}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-3 p-4">
        <h1 className="font-opensans text-xl font-bold lg:text-2xl xl:text-3xl">
          Future of Work
        </h1>
        <p className="font-opensans text-dark-light line-clamp-2 text-sm lg:text-lg xl:text-lg">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex gap-x-2 items-center mt-6 ">
          <div className="rounded-full w-9 h-9 border-2 overflow-hidden lg:w-10 lg:h-10 bg-red-500">
            <img
              src={image}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col items-start gap-y-1">
            <h1 className=" font-opensans italic font-bold text-sm lg:text-base">
              Alifcpr
            </h1>
            {/* <div className="flex items-center gap-x-1">
              <div className="w-4 h-4 rounded-full flex items-center justify-center bg-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 stroke-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="font-opensans italic text-xs lg:text-sm">Verified writer</p>
            </div> */}
            <div className="flex items-center gap-x-1">
              <div className="w-4 h-4 rounded-full flex items-center justify-center bg-red-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 stroke-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="font-opensans italic text-xs lg:text-sm">
                Unverfied writer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
