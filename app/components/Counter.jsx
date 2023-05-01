"use client";
import React, { useState } from "react";
import Image from "next/image";
import minusIcon from "../../public/images/icon-minus.svg";
import plusIcon from "../../public/images/icon-plus.svg";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => (prevCount += 1));
  };
  const decrementCount = () => {
    if (count == 0) {
      setCount(0);
    } else {
      setCount((prevCount) => (prevCount -= 1));
    }
  };
  return (
    <div className="flex items-center w-full bg-lightGrayishBlue rounded-lg p-7 justify-between h-10">
      <div className=" px-10 py-5" onClick={decrementCount}>
        <Image
          src={minusIcon}
          alt="Minus Icon"
          width={500}
          height={500}
          className="w-3"
        />
      </div>
      {/* redux count variable */}
      <p className="font-bold">{count}</p>
      <div className="px-10 py-5" onClick={incrementCount}>
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
