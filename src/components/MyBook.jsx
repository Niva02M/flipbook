import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import "./../index.css";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

// To dynamically import all images from the assets folder instead of making an array
const images = import.meta.glob("./../assets/*.png", { eager: true });

// Convert the imported modules into an array of image URLs, sorting them by file name (which is saved by name 0.png-62.png)
const imageArray = Object.entries(images)
  .sort((a, b) => {
    // Extract numeric value from the file names (e.g., '0.png', '47.png')
    const aIndex = parseInt(a[0].match(/(\d+)\.png$/)[1], 10);
    const bIndex = parseInt(b[0].match(/(\d+)\.png$/)[1], 10);
    return aIndex - bIndex; // Sort in ascending order
  })
  .map((module) => module[1].default); // Map to the actual image URLs

const flipSettings = {
  width: 300,
  height: 400,
  size: "fixed",
  drawShadow: true,
  showCover: true,
  maxShadowOpacity: 0.5,
  flippingTime: 1000,
};

const MyBook = () => {
  const flipBookRef = useRef(null);
  const handleNextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
    }
  };

  const handlePreviousPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev();
    }
  };
  return (
    <div className="flex justify-center items-center p-4 ">
      <button
        onClick={handlePreviousPage}
        className=" text-white p-3 rounded-full hover:bg-red-700 m-4 hidden md:flex"
      >
        <GrCaretPrevious />
      </button>
      <HTMLFlipBook ref={flipBookRef} {...flipSettings}>
        {imageArray.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Page ${index + 1}`}
              className="object-cover w-full h-full bg-white"
            />
            <div
              className={`absolute ${
                index % 2 === 0 ? "right-0" : "right-0 md:left-0 md:hidden"
              } text-white text-sm font-medium`}
            >
              Page {index + 1}
            </div>
          </div>
        ))}
      </HTMLFlipBook>

      <button
        onClick={handleNextPage}
        className=" text-white p-3 rounded-full hover:bg-red-700 m-4 hidden md:flex"
      >
        <GrCaretNext />
      </button>
    </div>
  );
};

export default MyBook;
