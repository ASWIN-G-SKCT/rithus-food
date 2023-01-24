import CartItemCard from "components/cart/CartItemCard";
import { db } from "@/firebase/index";
import { addDoc, doc } from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { CartState } from "store/features/cartSlice";
import { RootState } from "store/rootReducer";

const Cart = () => {
  const cart = useSelector<RootState, CartState>((state) => state.cart);

  const onClickHandler = () => {};

  if (cart.items.length === 0) return <div>Cart is Empty</div>;

  return (
    <div>
      cart {cart.total}
      {cart.items.map((item) => {
        return <CartItemCard cartItem={item} key={item.product._id} />;
      })}
      <button onClick={onClickHandler}>Buy</button>
    </div>
  );
};

export default Cart;
