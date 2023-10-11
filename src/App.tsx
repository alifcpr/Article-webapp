import React from "react";
import MainLayOut from "./layouts/MainLayOut";
import { Outlet } from "react-router-dom";
import useTitle from "./hook/useTitle";

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
