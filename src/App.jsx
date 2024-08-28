import React, { useState, useRef } from "react";
import "./index.css";
import img from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";

const FlipBook = () => {
  const images = [img, img2, img3, img4, img5, img6, img7, img8];

  // Calculate the total number of pages (2 images per page)
  const totalPages = Math.ceil(images.length / 2);

  // State to manage the current page
  const [currentPage, setCurrentPage] = useState(1);

  const bookRef = useRef(null);

  // Function to go to the next page
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Function to go to the previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Calculate the current images for the page
  const leftImageIndex = (currentPage - 1) * 2;
  const rightImageIndex = leftImageIndex + 1;

  const handleClick = (e) => {
    if (bookRef.current) {
      const { clientX } = e;
      const { left, width } = bookRef.current.getBoundingClientRect();
      const halfWidth = width / 2;
      const clickX = clientX - left;

      if (clickX < halfWidth) {
        // Clicked on the left side, go to previous page
        goToPreviousPage();
      } else {
        // Clicked on the right side, go to next page
        goToNextPage();
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-white">
      <div
        className="relative w-[500px] h-[400px]"
        ref={bookRef}
        onClick={handleClick}
      >
        {/* Page Left */}
        <div className="absolute w-1/2 h-full top-0 left-0 bg-white p-3 shadow-inner shadow-black/50">
          {images[leftImageIndex] && (
            <img
              src={images[leftImageIndex]}
              alt={`Image ${leftImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Page Right */}
        <div className="absolute w-1/2 h-full top-0 left-1/2 bg-white p-3 shadow-inner shadow-black/50">
          {images[rightImageIndex] && (
            <img
              src={images[rightImageIndex]}
              alt={`Image ${rightImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
