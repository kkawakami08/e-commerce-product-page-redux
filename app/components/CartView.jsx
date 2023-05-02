import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "./CartProduct";
import { emptyCart } from "../GlobalRedux/Features/cartSlice";

export default function CartView() {
  const { quantity, cartItems, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const cartProductArray = cartItems.map((item) => {
    return (
      <CartProduct
        id={item.id}
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
        <p className="font-bold">Cart</p>
        <hr />
        {quantity === 0 ? (
          <div className=" h-44 rounded-b-lg flex items-center justify-center">
            <p className="font-bold text-darkGrayishBlue">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <div className=" rounded-b-lg flex flex-col gap-5 justify-center">
            {cartProductArray}
            <hr />
            <p className="self-end">
              Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </p>
            <div className="bg-primaryOrange w-full flex items-center justify-center p-4 rounded-lg hover:cursor-pointer ">
              <p className="font-bold text-white">Checkout</p>
            </div>
            <p
              className="underline text-xs text-gray-400 self-center hover:cursor-pointer hover:text-gray-600"
              onClick={() => {
                dispatch(emptyCart());
              }}
            >
              Clear Cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
