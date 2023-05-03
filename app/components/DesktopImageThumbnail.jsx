import React from "react";
import Image from "next/image";

export default function DesktopImageThumbnail({
  imageArray,
  setImageIndex,
  imageIndex,
  id,
}) {
  let thumbnailClasses;
  if (imageIndex === id) {
    thumbnailClasses = "rounded-lg w-20 opacity-50";
  } else {
    thumbnailClasses = "rounded-lg w-20";
  }

  const handleClick = () => {
    setImageIndex(id);
  };

  return (
    <div
      className="hover:opacity-50 hover:cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={imageArray[id]}
        alt="Product Image"
        width={500}
        height={500}
        className={thumbnailClasses}
      />
    </div>
  );
}
