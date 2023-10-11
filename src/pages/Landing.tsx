/* hook */
import useTitle from "../hook/useTitle";

function Landing() {
  useTitle("Main Page");
  return (
    <div className="min-h-screen flex items-center justify-center">Landing</div>
  );
}

export default Landing;
