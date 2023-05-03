"use client";
import React, { useState } from "react";
import Image from "next/image";
import DesktopImageThumbnail from "./DesktopImageThumbnail";

export default function MobileImages({ imageArray }) {
  const [imageIndex, setImageIndex] = useState(0);
  let imageCount = -1;
  const thumbnailArray = imageArray.map((image) => {
    imageCount++;
    return (
      <DesktopImageThumbnail
        setImageIndex={setImageIndex}
        imageIndex={imageIndex}
        imageArray={imageArray}
        id={imageCount}
      />
    );
  });
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        <Image
          src={imageArray[imageIndex]}
          alt="Product Image"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="flex gap-5 justify-center">{thumbnailArray}</div>
    </div>
  );
}
