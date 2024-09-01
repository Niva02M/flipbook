import React from "react";
import MyBook from "./MyBook";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="relative max-w-[800px] w-full max-h-[600px] rounded-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-100 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>
        <MyBook />
      </div>
    </div>
  );
};

export default Modal;
