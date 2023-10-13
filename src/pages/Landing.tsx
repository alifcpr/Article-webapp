/* hook */
import LadingInfo from "../components/landing/LadingInfo";
import useTitle from "../hook/useTitle";
import { toast } from "react-hot-toast";

function Landing() {
  useTitle("Main Page");
  return (
    <div className="">
      <LadingInfo />
    </div>
  );
}

export default Landing;
