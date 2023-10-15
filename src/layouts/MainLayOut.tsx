/* components */
import Footer from "../components/footer/Footer";
import Header from "../components/Header";

const MainLayOut = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <div className="max-w-sm sm:max-w-xl md:max-w-2xl xl:max-w-7xl mx-auto p-3">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayOut;
