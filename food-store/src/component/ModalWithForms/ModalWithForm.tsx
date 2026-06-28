import React from "react";
import { useHandleClose } from "../../../src/lib/hooks/useHandleClose";

function ModalWithForm({
  children,
  title,
  handleClose,
  isOpen,
  onSubmit,
  buttonText,
  hideSubmit = false,
  isFormValid = true,
}: any) {
  const overlayRef = React.useRef(null);
  useHandleClose(isOpen, handleClose, overlayRef);

  return (
    <div
      className={`fixed insert-0 flex items-center justify-center bg-black/50 z-50 ${isOpen ? "flex" : "hidden"}`}
    >
      <div
        className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative"
        ref={overlayRef}
      >
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <button
          onClick={handleClose}
          type="button"
          className="ablsolute top-4 right-4 text-grey-500 hover:text-grey-800"
        >
          {buttonText}
        </button>
        <form onSubmit={onSubmit}>
          {children}
          {!hideSubmit && (
            <button
              type="submit"
              disabled={!isFormValid}
              className={`mt-4 w-full py-2 rounded-lg text-white font-medium transition-colors ${isFormValid ? "bg-blue-600 hover:bg-blue-700 cursor-pointer" : "bg-blue-300 cursor-not-allowed opacity-50"}`}
            >
              {buttonText}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
