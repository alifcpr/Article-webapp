import Footer from "../components/Footer";
import Header from "../components/Header";

const MainLayOut = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className=" max-w-sm sm:max-w-xl md:max-w-3xl xl:max-w-7xl mx-auto py-2">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayOut;
