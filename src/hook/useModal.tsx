import { useContext } from "react";
import { ModalState } from "../context/ModalStateProvider";

const useModal = () => {
  const openState = useContext(ModalState);

  if (!openState)
    throw new Error("You need to use this context inside a provider");
  return openState;
};

export default useModal;
