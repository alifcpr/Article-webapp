import { useEffect , useRef } from "react";

const useClickOutSide = (onClose: React.Dispatch<React.SetStateAction<boolean>>) => {

  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose(false)
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });

  return ref
};

export default useClickOutSide
