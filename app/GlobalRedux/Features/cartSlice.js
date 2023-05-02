import { createSlice } from "@reduxjs/toolkit";

//cartItems: [{id, title, price, img, quantity}]

const initialState = {
  cartItems: [],
  quantity: 1,
  totalPrice: 0,
  visible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.visible = !state.visible;
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
    addToCart: {
      reducer: (state, action) => {
        const foundItemIndex = state.cartItems.findIndex(
          (product) => action.payload.id === product.id
        );
        if (foundItemIndex === -1) {
          state.cartItems.push(action.payload);
        } else {
          state.cartItems[foundItemIndex].quantity += action.payload.quantity;
        }

        state.quantity += action.payload.quantity;
        state.totalPrice +=
          action.payload.quantity * (action.payload.price * 0.5);
      },
      prepare: (id, name, price, imgURL, quantity) => {
        return { payload: { id, name, price, imgURL, quantity } };
      },
    },
    removeFromCart: (state, action) => {
      state.cartItems.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { emptyCart, addToCart, removeFromCart, toggleCart } =
  cartSlice.actions;
export default cartSlice.reducer;

//add/remove item to cart, increase/decrease quantity of item in cart
