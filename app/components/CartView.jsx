import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

export default function CartView() {
  const { quantity, cartItems } = useSelector((state) => state.cart);
  const cartProductArray = cartItems.map((item) => {
    return (
      <CartProduct
        name={item.name}
        price={item.price * 0.5}
        imgURL={item.imgURL}
        quantity={item.quantity}
      />
    );
  });
  return (
    <div className="absolute top-0 bg-transparent z-10 w-full ">
      <div className="bg-white m-2 rounded-lg p-5 flex flex-col gap-5">
        <p className="font-bold border-b-2 pb-5">Cart</p>
        {quantity === 0 ? (
          <div className=" h-44 rounded-b-lg flex items-center justify-center">
            <p className="font-bold text-darkGrayishBlue">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className=" rounded-b-lg flex flex-col gap-5 justify-center">
            {cartProductArray}
            <div className="bg-primaryOrange w-full flex items-center justify-center p-4 rounded-lg">
              <p className="font-bold text-white">Checkout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
