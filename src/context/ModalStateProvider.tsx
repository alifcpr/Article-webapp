import { createContext, useState } from "react";

type ModalStateType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type ModalProviderProps = {
  children: React.ReactNode;
};

export const ModalState = createContext<ModalStateType | null>(null);

const ModalStateProvider = ({ children }: ModalProviderProps) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <ModalState.Provider value={{ open, setOpen }}>
      {children}
    </ModalState.Provider>
  );
};

export default ModalStateProvider;
