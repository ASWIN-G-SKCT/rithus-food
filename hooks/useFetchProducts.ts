import { Product } from "interfaces/types";
import useFetchWithSWR from "./useFetchWithSWR";

export default function useFetchProducts() {
  const {
    data: products,
    isLoading,
    error,
  } = useFetchWithSWR<Product[]>("/api/products");

  return { products, isLoading, error };
}
