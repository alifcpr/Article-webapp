import MainLayOut from "./layouts/MainLayOut";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axiosPrivate from "./services/axiosPrivate";
import useAuth from "./hook/useAuth";

const App = () => {
  const { setAuth } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const fetch = async () => {
        const { data } = await axiosPrivate.get("/api/users/profile");
        const { admin, token } = data;
        setAuth({ login: true, admin, token });
      };
      fetch();
    }
  }, []);

  return (
    <div>
      <MainLayOut>
        <Outlet />
      </MainLayOut>
    </div>
  );
};

export default App;
