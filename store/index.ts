import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./features/userSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
