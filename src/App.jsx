import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./index.css";

// Import your images
import Coverimg from "./assets/cover.png";
import img from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img7 from "./assets/7.png";
import img8 from "./assets/8.png";

function MyBook() {
  const images = [Coverimg, img, img2, img3, img4, img5, img6, img7, img8];

  // Flipbook settings
  const flipSettings = {
    width: 300,
    height: 400,
    size: "fixed",
    drawShadow: true, // Ensure shadows are enabled
    showCover: false, // Ensure cover is shown if needed
    maxShadowOpacity: 0.5,
    flippingTime: 1000, // Adjust flipping time if necessary
  };

  return (
    <div className="flex justify-center items-center bg-red-600 p-4 ">
      <HTMLFlipBook {...flipSettings} className="bg-red-600 overflow-hidden">
        <div className="h-[400px]  w-[300px] border-2 border-red-600">
          <div className="flex flex-col justify-center h-full w-full ">
            <h1 className="text-2xl text-white">
              Tap on the cover to view the catalogue
            </h1>
            <p className="text-sm text-white">
              Funfact: click or tap on the page to flip{" "}
            </p>
          </div>
        </div>

        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full bg-white ">
            <img
              src={image}
              alt={`Page ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default MyBook;
