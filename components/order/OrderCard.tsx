import { db } from "@/firebase/index";
import ProductCard from "components/product/ProductCard";
import { DocumentData, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { Order } from "interfaces/types";
import React, { FC } from "react";

interface OrderCardProps {
  order: Order;
}

const OrderCard: FC<OrderCardProps> = ({ order }) => {
  const dispatchHandler = (id: string) => {
    updateDoc<DocumentData>(doc(db, "orders", id), {
      status: "dispatched",
    });
  };
  return (
    <div>
      {order.address.city}
      <div>
        {order.items.map((item) => (
          <div key={item.product._id}>
            <ProductCard product={item.product} showcase />
          </div>
        ))}
        <p>{order.status}</p>
        <button onClick={() => dispatchHandler(order._id)}>Dispatch</button>
      </div>
    </div>
  );
};

export default OrderCard;
