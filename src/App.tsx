import MainLayOut from "./layouts/MainLayOut";
import { Outlet } from "react-router-dom";
import useGetUserProfile from "./hook/fetching/useGetUserProfile";

const App = () => {
  /* check user login */
  useGetUserProfile();

  return (
    <div>
      <MainLayOut>
        <Outlet />
      </MainLayOut>
    </div>
  );
};

export default App;
