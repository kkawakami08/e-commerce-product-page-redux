import React from "react";
import trashIcon from "../../public/images/icon-delete.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../GlobalRedux/Features/cartSlice";

export default function CartProduct({ name, price, imgURL, quantity, id }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between  w-full gap-5">
      <div className="w-12 ">
        <Image
          src={imgURL}
          alt="Cart icon"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="grow text-darkGrayishBlue">
        <p>{name}</p>
        <div className="flex justify-between">
          <p>
            ${price.toFixed(2)} x {quantity}
          </p>
          <p className="font-bold text-black">${price * quantity.toFixed(2)}</p>
        </div>
      </div>
      <div
        className="w-3 hover:cursor-pointer"
        onClick={() => {
          dispatch(removeFromCart(id, name, price, quantity));
        }}
      >
        <Image
          src={trashIcon}
          alt="Cart icon"
          width={500}
          height={500}
          className=""
        />
      </div>
    </div>
  );
}
