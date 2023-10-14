const FooterBottom = () => {
  return (
    <>
    <div className="bg-dark-hard py-4 px-3 grid grid-cols-12">
      <div className="col-span-12 grid grid-cols-12 gap-y-5 mt-8 md:col-span-8">
        <div className="col-span-6 flex flex-col gap-y-2 font-opensans xl:col-span-3">
          <h1 className="text-slate-400 font-bold md:text-lg">Product</h1>
          <ul className="flex flex-col gap-y-2 font-opensans text-sm text-slate-500 md:text-lg">
            <li>LandingPage</li>
            <li>Features</li>
            <li>Documentation</li>
            <li>Refrerral Program</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="col-span-6 flex flex-col gap-y-2 font-opensans xl:col-span-3">
          <h1 className="text-slate-400 font-bold md:text-lg">Services</h1>
          <ul className="flex flex-col gap-y-2 font-opensans text-slate-500 text-sm md:text-lg">
            <li>Documentation</li>
            <li>Design</li>
            <li>Themes</li>
            <li>Illustrations</li>
            <li>UI Kit</li>
          </ul>
        </div>
        <div className="col-span-6 flex flex-col gap-y-2 font-opensans xl:col-span-3">
          <h1 className="text-slate-400 font-bold md:text-lg">Company</h1>
          <ul className="flex flex-col gap-y-2 font-opensans text-slate-500 text-sm md:text-lg">
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="col-span-6 flex flex-col gap-y-2 font-opensans xl:col-span-3">
          <h1 className="text-slate-400 font-bold md:text-lg">Services</h1>
          <ul className="flex flex-col gap-y-2 font-opensans text-sm text-slate-500 md:text-lg">
            <li>Documentation</li>
            <li>License</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
      <div className="col-span-12 flex flex-col items-center justify-center mt-7 md:col-span-4 md:justify-start md:items-start">
        <div>
          <svg
            width="77"
            height="24"
            viewBox="0 0 77 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.9979 0.830357V18.3884C17.9979 18.6205 18.0756 18.8147 18.2309 18.971C18.3862 19.1272 18.5792 19.2054 18.8099 19.2054H21.7918C22.0226 19.2054 22.2156 19.1272 22.3709 18.971C22.5262 18.8147 22.6039 18.6205 22.6039 18.3884V10.3337C23.873 9.05695 25.0622 7.91518 26.1715 7.91518C27.8666 7.91518 28.7141 8.56695 28.7141 10.7009V18.3884C28.7141 18.6205 28.7918 18.8147 28.9471 18.971C29.1024 19.1272 29.2954 19.2054 29.5261 19.2054H32.4947C32.7343 19.2054 32.9318 19.1272 33.0871 18.971C33.2424 18.8147 33.3201 18.6205 33.3201 18.3884V10.7009C33.3201 8.52231 32.7787 6.90402 31.696 5.84598C30.6133 4.78794 29.2089 4.25893 27.4827 4.25893C25.7566 4.25893 24.1303 4.90624 22.6039 6.20089V0.830357C22.6039 0.589284 22.5262 0.390626 22.3709 0.234375C22.2156 0.0781242 22.0226 0 21.7918 0H18.8099C18.5792 0 18.3862 0.0781242 18.2309 0.234375C18.0756 0.390626 17.9979 0.589284 17.9979 0.830357ZM0 11.8862C0 14.3371 0.683345 16.2143 2.05006 17.5179C3.41677 18.8214 5.32481 19.4733 7.77424 19.4733C12.1794 19.4813 14.3154 18.5424 14.7231 16.433C14.7647 16.2179 14.4748 15.5369 13.1896 15.3563C11.9044 15.1757 11.0712 15.0937 10.6363 15.6295C10.2015 16.1652 9.39388 16.433 8.21354 16.433C7.0332 16.433 6.17458 16.183 5.63766 15.683C5.10073 15.183 4.7879 14.3839 4.69916 13.2857H14.7231C14.9628 13.2857 15.1602 13.2076 15.3155 13.0513C15.4708 12.8951 15.5485 12.6964 15.5485 12.4554V11.692C15.5485 9.2991 14.8651 7.46206 13.4984 6.1808C12.1317 4.89955 10.2281 4.25893 7.78755 4.25893C5.347 4.25893 3.43895 4.9174 2.06337 6.23438C0.687783 7.55135 0 9.43526 0 11.8862ZM10.8626 10.4598H4.67253C4.77903 8.35267 5.81514 7.29911 7.7809 7.29911C9.74665 7.29911 10.7739 8.35267 10.8626 10.4598ZM77 8.57143C77 10.465 75.4678 12 73.5778 12C71.6877 12 70.1556 10.465 70.1556 8.57143C70.1556 6.67788 71.6877 5.14286 73.5778 5.14286C75.4678 5.14286 77 6.67788 77 8.57143ZM39.1641 20.5982L40.9079 20.8259C41.9672 20.8259 42.7562 20.1637 43.2749 18.8394C43.2843 18.8155 43.2084 18.8031 43.0678 18.7802C42.5315 18.6928 41.0531 18.4518 39.7631 16.8328C38.2845 14.977 38.0648 14.2607 37.492 12.393L37.4916 12.3918C37.4337 12.2031 37.3722 12.0026 37.3055 11.788L35.322 5.31926C35.2953 5.24783 35.282 5.16524 35.282 5.07149C35.282 4.97774 35.3375 4.8639 35.4484 4.72997C35.5594 4.59604 35.7258 4.52462 35.9476 4.51569L38.565 4.52679C38.8224 4.52679 39.0687 4.61384 39.3038 4.78795C39.539 4.96205 39.6921 5.17857 39.7631 5.4375L41.507 11.1161C41.9419 12.5089 42.3834 13.4732 42.8315 14.0089C43.2797 14.5446 43.81 14.8125 44.4223 14.8125L47.0714 5.4375C47.1424 5.17857 47.2822 4.96205 47.4908 4.78795C47.6993 4.61384 47.9323 4.52679 48.1896 4.52679H50.9985C51.2204 4.52679 51.3845 4.59821 51.491 4.74107C51.5975 4.88393 51.6508 5.00223 51.6508 5.09598C51.6508 5.18973 51.6419 5.26786 51.6242 5.33036L48.1364 17.8393C47.5152 20.0536 46.7453 21.6339 45.8268 22.5804C44.9082 23.5268 43.7257 24 42.2791 24L41.7231 23.9971C40.5673 23.9848 39.7298 23.9321 39.2107 23.8393C38.6116 23.7321 38.2367 23.6004 38.0858 23.4442C37.9349 23.2879 37.8595 23.1071 37.8595 22.9018V21.4286C37.8595 21.1875 37.9349 20.9888 38.0858 20.8326C38.2367 20.6763 38.4319 20.5982 38.6715 20.5982H39.1641ZM53.1684 18.2411C51.9969 17.4196 51.4112 16.2589 51.4112 14.7589C51.4112 13.2589 51.9991 12.1071 53.175 11.3036C54.3509 10.5 55.8663 10.0982 57.7211 10.0982H62.1274C62.1274 9.05357 61.9099 8.3259 61.4751 7.91518C61.0402 7.50446 60.2792 7.29911 59.1921 7.29911C58.1774 7.29911 57.4449 7.53438 56.9946 8.00494L56.9024 8.10938C56.4631 8.64956 55.0802 8.4659 53.8457 8.22764C52.6111 7.98939 52.5312 7.3584 52.6414 7.03003C53.2612 5.18262 55.6244 4.25893 59.7312 4.25893C61.8434 4.25893 63.5384 4.73437 64.8164 5.68527C66.0944 6.63617 66.7333 8.10713 66.7333 10.0982V18.3884C66.7333 18.6295 66.6579 18.8259 66.507 18.9777C66.3562 19.1295 66.1609 19.2054 65.9213 19.2054H63.3521C63.1125 19.2054 62.9172 19.1272 62.7663 18.971C62.6155 18.8147 62.54 18.6205 62.54 18.3884V17.9732C61.1378 18.9821 59.5204 19.4844 57.6878 19.4799C55.8552 19.4754 54.3487 19.0625 53.1684 18.2411ZM58.0406 13.1384H62.1274V15.2277C60.8583 16.0313 59.5404 16.433 58.1737 16.433C57.4903 16.433 56.9623 16.2768 56.5896 15.9643C56.2168 15.6518 56.0304 15.2545 56.0304 14.7723C56.0304 14.2902 56.2102 13.8973 56.5696 13.5938C56.929 13.2902 57.4193 13.1384 58.0406 13.1384Z"
              fill="white"
            />
          </svg>
        </div>
        <p className="text-slate-400 text-center mt-3 text-sm px-4 md:px-0 md:text-start xl:text-lg xl:pr-4">
          Build a modern and creative website with crealand
        </p>
        <div className="flex gap-x-4 mt-4 md:gap-x-2">
          <div className=" w-8 h-8 rounded-full bg-red-400"></div>
          <div className=" w-8 h-8 rounded-full bg-red-400"></div>
          <div className=" w-8 h-8 rounded-full bg-red-400"></div>
          <div className=" w-8 h-8 rounded-full bg-red-400"></div>
          <div className=" w-8 h-8 rounded-full bg-red-400 md:hidden"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FooterBottom;
