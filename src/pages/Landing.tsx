/* hook */
import BlogsContainer from "../components/blogsContent/BlogsContainer";
import LadingInfo from "../components/landing/LadingInfo";
import useTitle from "../hook/useTitle";
import { toast } from "react-hot-toast";

function Landing() {
  useTitle("Main Page");
  return (
    <div>
      <LadingInfo />
      <BlogsContainer />
    </div>
  );
}

export default Landing;
