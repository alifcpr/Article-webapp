import bot from "../../assets/FooterImage.png";

const FooterCart = () => {
  return (
    <div className="w-[440px] p-2 shadow-xl rounded-lg static z-10  overflow-hidden bg-white md:col-span-6 xl:col-span-4">
      <div className="w-full  overflow-hidden">
        <img
          src={bot}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col gap-y-3 p-4">
        <h1 className="font-opensans text-2xl font-bold md:text-2xl xl:text-3xl">
        The best aticles every week
        </h1>
        <p className="font-opensans text-dark-light line-clamp-2 text-sm md:text-lg xl:text-lg">
        Our insurance plans offers are priced the same everywhere else.
        </p>
      </div>
    </div>
  );
};

export default FooterCart;
