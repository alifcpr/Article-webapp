import MainLayOut from "./layouts/MainLayOut";
import { Outlet } from "react-router-dom";
import useGetUserProfile from "./hook/fetching/useGetUserProfile";
import { useContext } from "react";
import { ModalState } from "./context/ModalStateProvider";

const App = () => {
  /* check user login */
  useGetUserProfile();

  const test = useContext(ModalState)
  console.log("this : " , test)

  return (
    <div>
      <MainLayOut>
        <Outlet />
      </MainLayOut>
    </div>
  );
};

export default App;
