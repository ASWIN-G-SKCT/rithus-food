import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { useDispatch } from "react-redux";
import rootReducer, { RootState } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const makeStore = () => store;

export const wrapper = createWrapper(makeStore, { debug: true });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

//Todo: Why 👇?
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
