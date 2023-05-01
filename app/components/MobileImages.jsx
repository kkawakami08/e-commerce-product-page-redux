"use client";
import React, { useState } from "react";

import prevIcon from "../../public/images/icon-previous.svg";
import nextIcon from "../../public/images/icon-next.svg";
import Image from "next/image";
import { product } from "../../productData";

export default function MobileImages() {
  const imageArray = product.imagesURLs;
  const [imageIndex, setImageIndex] = useState(1);

  const handleNextClick = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === 3) {
        return 0;
      }
      return prevIndex + 1;
    });
  };
  const handlePrevClick = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === 0) {
        return 3;
      }
      return prevIndex - 1;
    });
  };
  return (
    <div className="relative">
      <div
        className=" absolute bg-white w-10 flex items-center justify-center h-10 rounded-full top-1/2 left-7"
        onClick={handlePrevClick}
      >
        <Image
          src={prevIcon}
          alt="Previous Icon"
          width={500}
          height={500}
          className="w-2"
        />
      </div>
      <div
        className=" absolute bg-white w-10 flex items-center justify-center h-10 rounded-full top-1/2 right-7"
        onClick={handleNextClick}
      >
        <Image
          src={nextIcon}
          alt="Next Icon"
          width={500}
          height={500}
          className="w-2"
        />
      </div>

      <div className="">
        <Image
          src={imageArray[imageIndex]}
          alt="Product Image"
          width={500}
          height={500}
          className=""
        />
      </div>
    </div>
  );
}
