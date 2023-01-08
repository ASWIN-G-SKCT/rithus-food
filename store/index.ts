import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./features/userSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });

export const wrapper = createWrapper(makeStore, { debug: true });
