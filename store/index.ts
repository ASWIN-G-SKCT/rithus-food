import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export const wrapper = createWrapper(makeStore, { debug: true });
