import EditProductCard from "components/product/EditProductCard";
import useFetchProducts from "hooks/useFetchProducts";
import React from "react";

const Discounts = () => {
  const { products, isLoading, error } = useFetchProducts();
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <div>
      {products?.map((product) => (
        <EditProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Discounts;
