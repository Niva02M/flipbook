import React, { useState } from "react";
import Modal from "./components/Modal";
import cover from "./assets/0.png";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi totam
      consectetur exercitationem cumque iste, delectus minus error fuga itaque
      earum repellat, magni possimus doloremque perspiciatis sapiente commodi
      magnam ducimus ab. Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Sunt, voluptatum, a rem reiciendis debitis provident error repellat
      distinctio deserunt culpa nostrum delectus possimus molestiae dolor
      repudiandae hic, voluptatibus saepe iusto. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Iste, ratione velit! Ullam quod vitae
      debitis, iure magnam non accusamus voluptate. Excepturi aliquam voluptas,
      sunt neque dolores unde cupiditate blanditiis quas. Lorem ipsum dolor sit
      amet consectetur, adipisicing elit. Consectetur tempora placeat, impedit
      repellendus unde iusto odit quis suscipit vitae velit officiis. Rem,
      quasi! Quae fuga aspernatur nam rerum, minus quidem?
      <img
        src={cover}
        onClick={openModal}
        className="h-[200px] bg-red-900 p-2"
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
