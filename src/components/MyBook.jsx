import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./../index.css";

import Coverimg from "./../assets/cover.png";
import img from "./../assets/1.png";
import img2 from "./../assets/2.png";
import img3 from "./../assets/3.png";
import img4 from "./../assets/4.png";
import img5 from "./../assets/5.png";
import img6 from "./../assets/6.png";
import img7 from "./../assets/7.png";
import img8 from "./../assets/8.png";
import img9 from "./../assets/9.png";
import img10 from "./../assets/10.png";
import img11 from "./../assets/11.png";
import img12 from "./../assets/12.png";
import img13 from "./../assets/13.png";
import img14 from "./../assets/14.png";
import img15 from "./../assets/15.png";
import img16 from "./../assets/16.png";
import img17 from "./../assets/17.png";
import img18 from "./../assets/18.png";
import img19 from "./../assets/19.png";
import img20 from "./../assets/20.png";
import img21 from "./../assets/21.png";
import img22 from "./../assets/22.png";
import img23 from "./../assets/23.png";
import img24 from "./../assets/24.png";
import img25 from "./../assets/25.png";
import img26 from "./../assets/26.png";
import img27 from "./../assets/27.png";
import img28 from "./../assets/28.png";
import img29 from "./../assets/29.png";
import img30 from "./../assets/30.png";
import img31 from "./../assets/31.png";
import img32 from "./../assets/32.png";
import img33 from "./../assets/33.png";
import img34 from "./../assets/34.png";
import img35 from "./../assets/35.png";
import img36 from "./../assets/36.png";
import img37 from "./../assets/37.png";
import img38 from "./../assets/38.png";
import img39 from "./../assets/39.png";
import img40 from "./../assets/40.png";
import img41 from "./../assets/41.png";
import img42 from "./../assets/42.png";
import img43 from "./../assets/43.png";
import img44 from "./../assets/44.png";
import img45 from "./../assets/45.png";
import img46 from "./../assets/46.png";
import img47 from "./../assets/47.png";
import img48 from "./../assets/48.png";
import img49 from "./../assets/49.png";
import img50 from "./../assets/50.png";
import img51 from "./../assets/51.png";
import img52 from "./../assets/52.png";
import img53 from "./../assets/53.png";
import img54 from "./../assets/54.png";
import img55 from "./../assets/55.png";
import img56 from "./../assets/56.png";
import img57 from "./../assets/57.png";
import img58 from "./../assets/58.png";
import img59 from "./../assets/59.png";
import img60 from "./../assets/60.png";
import img61 from "./../assets/61.png";
import img62 from "./../assets/62.png";

const MyBook = () => {
  const images = [
    Coverimg,
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
    img45,
    img46,
    img47,
    img48,
    img49,
    img50,
    img51,
    img52,
    img53,
    img54,
    img55,
    img56,
    img57,
    img58,
    img59,
    img60,
    img61,
    img62,
  ];

  const flipSettings = {
    width: 300,
    height: 400,
    size: "fixed",
    drawShadow: true,
    showCover: false,
    maxShadowOpacity: 0.5,
    flippingTime: 1000,
  };

  return (
    <div className="flex justify-center items-center bg-red-600 p-12 shadow-lg rounded-2xl">
      <HTMLFlipBook {...flipSettings}>
        <div className="flex">
          <div className="flex flex-col justify-center h-full w-full p-6 mt-4">
            <h1 className="text-2xl text-white">
              Drag the page or tap on the side of the book to turn{" "}
            </h1>
          </div>
        </div>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Page ${index + 1}`}
              className="object-cover w-full h-full bg-white "
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default MyBook;
