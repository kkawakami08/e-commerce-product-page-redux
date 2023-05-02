"use client";
import { configureStore } from "@reduxjs/toolkit";
//import sliceReducers
import cartReducer from "../GlobalRedux/Features/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
