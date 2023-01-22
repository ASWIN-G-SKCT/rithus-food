import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "interfaces/types";
import { HYDRATE } from "next-redux-wrapper";

export type CartItem = {
  quantity: number;
  product: Product;
};

export type CartState = {
  total: number;
  items: CartItem[];
};

const initialState: CartState = {
  total: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.product._id === payload.product._id
      );

      if (existingItem) return;

      state.items.push(payload);
      state.total = Number(state.total) + Number(payload.product.price);
    },

    increaseQuantity: (
      state,
      { payload }: PayloadAction<{ amount: number; productId: string }>
    ) => {
      const cartItem = state.items.find(
        (item) => item.product._id === payload.productId
      );

      if (cartItem) {
        cartItem.quantity += payload.amount;
        state.total += payload.amount * +cartItem.product.price;
      }
    },

    decreaseQuantity: (
      state,
      { payload }: PayloadAction<{ amount: number; productId: string }>
    ) => {
      const cartItem = state.items.find(
        (item) => item.product._id === payload.productId
      );

      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity -= payload.amount;
        state.total -= payload.amount * +cartItem.product.price;
      }
    },

    removeFromCart: (
      state,
      { payload: productIdToRemove }: PayloadAction<string>
    ) => {
      state.items = state.items.filter(
        (item) => item.product._id !== productIdToRemove
      );
    },

    emptyCart: (state) => {
      state.items = state.items.filter(() => false);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  emptyCart,
  increaseQuantity,
  removeFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
