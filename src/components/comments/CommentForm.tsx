import Loading from "../Loadings/Loading";
import { useRef, useEffect } from "react";

type CommentFormProps = {
  btnLabel: string;
  type: string;
  showCancel: boolean;
  value: string;
  submitFunc: () => void;
  changeValueFunc: React.Dispatch<React.SetStateAction<string>>;
  loadingState: boolean;
  showForm?: boolean;
  placeHolderText: string;
  changeShowFromState?: React.Dispatch<React.SetStateAction<boolean>> | null;
};
const CommentForm = ({
  btnLabel,
  type,
  showCancel,
  submitFunc,
  value = "",
  changeValueFunc,
  loadingState,
  showForm,
  placeHolderText,
  changeShowFromState,
}: CommentFormProps) => {
  const inputRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    showForm && inputRef.current?.focus();
  }, [showForm]);

  return (
    <div className="w-full">
      <textarea
        className="w-full border-2 rounded-lg font-opensans p-2 focus:outline-primary"
        placeholder={placeHolderText}
        value={value}
        disabled={loadingState}
        onChange={(e) => changeValueFunc(e.target.value)}
        ref={inputRef}
      ></textarea>
      <div className="flex gap-x-4 mt-2 justify-end items-center">
        {showCancel && changeShowFromState && (
          <button
            disabled={loadingState}
            onClick={() => changeShowFromState(false)}
            className="border border-red-500 disabled:hover:bg-transparent disabled:hover:text-red-500 disabled:bg-opacity-80 px-4 py-1 rounded-md transition-all duration-150 hover:bg-red-500 hover:text-white text-red-500 font-opensans"
          >
            Cancel
          </button>
        )}
        <button
          onClick={submitFunc}
          disabled={loadingState}
          className="font-opensans disabled:bg-opacity-80 border-2 p-2 rounded-lg bg-primary text-white transition-all duration-300 font-semibold text-sm border-primary"
        >
          {loadingState ? <Loading /> : btnLabel}
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
