import React, { useState } from "react";
import Modal from "./components/Modal";
import cover from "./assets/0.png";
import flyerCover from "./assets/flyer/0.png";
import cookerCover from "./assets/cooker/0.png";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const openModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src={cover}
          onClick={() => openModal("first")}
          className="h-[200px]  p-2 cursor-pointer shadow-lg shadow-gray-500"
          alt="First Book Cover"
        />

        <img
          src={flyerCover}
          onClick={() => openModal("second")}
          className="h-[200px]  p-2 cursor-pointer shadow-lg shadow-gray-500"
          alt="Second Book Cover"
        />

        <img
          src={cookerCover}
          onClick={() => openModal("third")}
          className="h-[200px]  p-2 cursor-pointer shadow-lg shadow-gray-500"
          alt="Third Book Cover"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedBook={selectedBook}
      />
    </div>
  );
};

export default App;
