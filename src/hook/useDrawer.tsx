import React, { useContext } from "react";
import { DrawerState } from "../context/DrawerStateProvider";

const useDrawer = () => {
  const drawerState = useContext(DrawerState);

  if (!drawerState) {
    throw new Error("You need to use this context inside a provider");
  }
  return drawerState;
};

export default useDrawer;
