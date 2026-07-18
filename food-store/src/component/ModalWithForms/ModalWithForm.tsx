"use client";
import React from "react";

interface ModalWithFormProps {
  children: React.ReactNode;
  title: string;
  handleClose: () => void;
  isOpen: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  hideSubmit?: boolean;
  isFormValid?: boolean;
  overlayRef: React.RefObject<HTMLDivElement>;
}

function ModalWithForm({
  children,
  title,
  handleClose,
  isOpen,
  onSubmit,
  buttonText,
  hideSubmit = false,
  isFormValid = true,
  overlayRef,
}: ModalWithFormProps) {
  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 flex items-center justify-center bg-black/50 z-50 ${isOpen ? "flex" : "hidden"}`}
    >
      <div className="bg-white rounded-2xl p-8 w-full max-w-md shadow-xl relative">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <button
          onClick={handleClose}
          type="button"
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          X
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
