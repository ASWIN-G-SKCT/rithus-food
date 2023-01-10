import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      state++;
    },
  },
});

export default cartSlice.reducer;
