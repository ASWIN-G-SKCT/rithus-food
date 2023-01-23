import { db } from "@/firebase/index";
import { doc, updateDoc } from "firebase/firestore";
import { Product } from "interfaces/types";
import React, { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInputs = {
  discount: number;
  itemsInStock: number;
};

type EditProductCardProps = {
  product: Product;
};

const EditProductCard: FC<EditProductCardProps> = ({ product }) => {
  const [updates, setUpdates] = useState(product);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Product>();

  const onSubmitHandler: SubmitHandler<FormInputs> = async (updates) => {
    const docRef = doc(db, "products", product._id);

    await updateDoc(docRef, updates);

    alert("Product Updated");
  };

  return (
    <form key={product._id} onSubmit={handleSubmit(onSubmitHandler)}>
      <p>{product.name}</p>
      <p>{product.ingredients[0]}</p>
      <p>Discount</p>
      <input type="number" {...register("discount")} />
      <p>Stock</p>
      <input type="number" {...register("itemsInStock")} />
      <button type="submit">Update Product</button>
    </form>
  );
};

export default EditProductCard;
