import React, { useEffect } from "react";
import useFetchWithSWR from "hooks/useFetchWithSWR";
import { Product } from "interfaces/types";
import ProductCard from "components/product/ProductCard";
import { useSelector } from "react-redux";
import Link from "next/link";
import useFetchProducts from "hooks/useFetchProducts";

const Products = () => {
  const { products, isLoading, error } = useFetchProducts();

  const user = useSelector((state) => state);

  if (error) {
    return <div>Error {JSON.stringify(error)}</div>;
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
