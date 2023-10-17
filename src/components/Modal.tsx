import { createPortal } from "react-dom";

type ModalProps = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};
const Modal = ({ children, open, onClose }: ModalProps) => {
  return createPortal(
    <div
      className={`fixed inset-0 transition-all duration-200 z-50 backdrop-blur-sm flex items-center justify-center ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-white p-4 rounded-lg shadow-lg border font-opensans">
        {children}
        <button onClick={onClose}>close</button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
