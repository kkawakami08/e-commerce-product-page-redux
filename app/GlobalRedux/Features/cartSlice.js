import { createSlice } from "@reduxjs/toolkit";

//cartItems: [{id, title, price, img, quantity}]

const initialState = {
  cartItems: [],
  quantity: 3,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    emptyCart: (state) => {
      state.cartItems = [];
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { emptyCart, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

//add/remove item to cart, increase/decrease quantity of item in cart
