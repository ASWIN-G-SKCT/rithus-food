import CartItemCard from "components/cart/CartItemCard";
import { db } from "@/firebase/index";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CartState } from "store/features/cartSlice";
import { RootState } from "store/rootReducer";
import { AuthState } from "store/features/userSlice";

const Cart = () => {
  const cart = useSelector<RootState, CartState>((state) => state.cart);
  const [addressToShip, setAddressToShip] = useState("");
  const { user } = useSelector<RootState, AuthState>((state) => state.auth);

  const onClickHandler = async () => {
    await addDoc(collection(db, "orders"), {
      user: "/user/" + user?.id,
      items: cart.items,
      total: cart.total,
      date: Timestamp.fromDate(new Date()),
    });
    alert("Order Placed");
  };

  if (cart.items.length === 0) return <div>Cart is Empty</div>;

  return (
    <div>
      cart {cart.total}
      {cart.items.map((item) => {
        return <CartItemCard cartItem={item} key={item.product._id} />;
      })}
      <input
        type="text"
        value={addressToShip}
        placeholder="Address"
        onChange={(e) => setAddressToShip(e.target.value)}
      />
      <button onClick={onClickHandler}>Buy</button>
    </div>
  );
};

export default Cart;
