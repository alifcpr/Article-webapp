import MainLayOut from "./layouts/MainLayOut";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <MainLayOut>
        <Outlet />
      </MainLayOut>
    </div>
  );
};

export default App;
