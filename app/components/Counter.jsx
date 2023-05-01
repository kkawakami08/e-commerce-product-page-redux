import React from "react";
import Image from "next/image";
import minusIcon from "../../public/images/icon-minus.svg";
import plusIcon from "../../public/images/icon-plus.svg";

export default function Counter() {
  return (
    <div className="flex items-center w-full bg-lightGrayishBlue rounded-lg p-7 justify-between h-10">
      <div className="">
        <Image
          src={minusIcon}
          alt="Minus Icon"
          width={500}
          height={500}
          className="w-3"
        />
      </div>
      {/* redux count variable */}
      <p className="font-bold">0</p>
      <div className="">
        <Image
          src={plusIcon}
          alt="Plus Icon"
          width={500}
          height={500}
          className="w-3"
        />
      </div>
    </div>
  );
}
