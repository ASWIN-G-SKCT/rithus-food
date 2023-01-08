import React, { useEffect } from "react";
import useFetchWithSWR from "../../hooks/useFetchWithSWR";
import { Product } from "../../interfaces/types";

const Products = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetchWithSWR<Product[]>("/api/products");

  if (error) {
    return <div>Error {error}</div>;
  }

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {products?.map((product: Product) => (
        <div key={product._id}>{JSON.stringify(product)}</div>
      ))}
    </div>
  );
};

export default Products;
