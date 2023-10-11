/* hook */
import useTitle from "../hook/useTitle";
import { toast } from "react-hot-toast";

function Landing() {
  useTitle("Main Page");
  return (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={() => toast.success("alsdjf")}>Click</button>
    </div>
  );
}

export default Landing;
