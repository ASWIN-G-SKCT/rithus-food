import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces/types";
import { RootState } from "../rootReducer";

export interface AuthError {
  message: string;
}

export interface AuthState {
  isAuth: boolean;
  user?: User;
  isLoading: boolean;
  error: AuthError | null;
}

export const initialState: AuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    login: (state, { payload }: PayloadAction<User>) => {
      state.user = payload;
      state.isAuth = true;
      return state;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = undefined;
      return state;
    },
    setAuthFailed: (state, { payload }: PayloadAction<AuthError>) => {
      state.error = payload;
      state.isAuth = false;
    },
  },
});

export const { login, logout, setAuthFailed, setLoading } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth;
// export const selectUser = (state) => state.user.user;
export default authSlice.reducer;
