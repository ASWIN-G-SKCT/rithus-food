import React, { FC } from "react";
import { useDispatch } from "react-redux";
import {
  CartItem,
  decreaseQuantity,
  increaseQuantity,
} from "store/features/cartSlice";

type CartItemCardProps = {
  cartItem: CartItem;
};

const CartItemCard: FC<CartItemCardProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <div>
      ID {cartItem.product._id} quantity {cartItem.quantity}
      <button
        onClick={() =>
          dispatch(
            increaseQuantity({ amount: 1, productId: cartItem.product._id })
          )
        }
      >
        Add Quantity
      </button>
      <button
        onClick={() =>
          dispatch(
            decreaseQuantity({ amount: 1, productId: cartItem.product._id })
          )
        }
      >
        Subtract Quantity
      </button>
    </div>
  );
};

export default CartItemCard;
