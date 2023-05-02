import { createSlice } from "@reduxjs/toolkit";

//cartItems: [{id, title, price, img, quantity}]
// {
//     cart: {
//       cartItems: [
//         {
//           id: 1,
//           name: 'Fall Limited Edition Sneakers',
//           price: 250,
//           imgURL: '/images/image-product-1.jpg',
//           quantity: 1
//         }
//       ],
//       quantity: 1,
//       totalPrice: 125,
//       visible: false
//     }
//   }

const initialState = {
  cartItems: [
    {
      id: 2,
      name: "Orange Sneakers",
      price: 440,
      imgURL: "/images/image-product-2.jpg",
      quantity: 3,
    },
  ],
  quantity: 3,
  totalPrice: 660,
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
