import { Order, Product } from "interfaces/types";
import useFetchWithSWR from "./useFetchWithSWR";

export default function useFetchOrders() {
  const {
    data: orders,
    isLoading,
    error,
  } = useFetchWithSWR<Order[]>("/api/orders");

  return { orders, isLoading, error };
}
