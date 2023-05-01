import React from "react";

export default function ProductPrice({ price }) {
  const discount = price * 0.5;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <p className="font-bold text-3xl tracking-wider">
          ${discount.toFixed(2)}
        </p>
        <div className="bg-paleOrange px-2 py-1 rounded-md">
          <p className="font-bold text-primaryOrange">50%</p>
        </div>
      </div>
      <p className="line-through font-bold text-grayishBlue">
        ${price.toFixed(2)}
      </p>
    </div>
  );
}
