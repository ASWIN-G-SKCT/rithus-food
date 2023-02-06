import OrderCard from "components/order/OrderCard";
import useFetchOrders from "hooks/useFetchOrders";
import React from "react";

const Orders = () => {
  const { orders, isLoading, error } = useFetchOrders();

  if (isLoading) return <div>...Loading</div>;

  if (error) return <div>{"Error"}</div>;

  return (
    <div>
      {orders?.map((order) => (
        <OrderCard key={order._id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
