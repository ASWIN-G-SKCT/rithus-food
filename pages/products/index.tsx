import React, { useEffect } from "react";
import useFetchWithSWR from "hooks/useFetchWithSWR";
import { Product } from "interfaces/types";
import ProductCard from "components/product/ProductCard";
import { useSelector } from "react-redux";
import Link from "next/link";

const Products = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetchWithSWR<Product[]>("/api/products");

  const user = useSelector((state) => state);
  console.log(user);
  if (error) {
    return <div>Error {error}</div>;
  }

  if (isLoading) return <div>Loading</div>;

  return (
    <div>
      {products?.map((product: Product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      <Link href={"/"}>Go Home</Link>
    </div>
  );
};

export default Products;
