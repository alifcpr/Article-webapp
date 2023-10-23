import React, { createContext, useState } from "react";

type contextType = {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DrawerState = createContext<contextType | null>(null);

const DrawerStateProvider = ({children}:{children: React.ReactNode}) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <div>
      <DrawerState.Provider
        value={{ openDrawer, setOpenDrawer }}
      >
        {children}
      </DrawerState.Provider>
    </div>
  );
};

export default DrawerStateProvider;
