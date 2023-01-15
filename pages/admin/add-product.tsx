import React, { useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";

import { db, storageRef } from "@/firebase/index";
import { uploadBytes } from "firebase/storage";

type FormInputs = {
  name: string;
  itemsInStock: number;
  baseQuantity: string;
  category: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  preparations: string[];
  productImages: string[];
  price: number;
};

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      ingredients: ["One Cup of Dragon blood"],
      benefits: ["Increase Byakugan's strength"],
      preparations: ["Cool the Dragon blood w.."],
    },
  });

  const {
    fields: ingredientField,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  } as never);

  const {
    fields: benefitFields,
    append: appendBenefit,
    remove: removeBenefit,
  } = useFieldArray({
    control,
    name: "benefits",
  } as never);

  const {
    fields: preparationFields,
    append: appendPreparation,
    remove: removePreparation,
  } = useFieldArray({
    control,
    name: "preparations",
  } as never);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    addDoc(collection(db, "products"), data).then(() => alert("Product added"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {ingredientField.map((field, index) => (
        <div key={field.id}>
          <input {...register(`ingredients.${index}` as const)} />
          <button onClick={() => removeIngredient(index)}>Delete</button>
          <br />
        </div>
      ))}

      <button
        type="button"
        onClick={() => appendIngredient("One Tea Spoon of...?")}
      >
        Add Ingredient
      </button>
      <br />

      {benefitFields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`benefits.${index}` as const)} />
          <button onClick={() => removeBenefit(index)}>Delete</button>
          <br />
        </div>
      ))}

      <button type="button" onClick={() => appendBenefit("Increases Immunity")}>
        Add a Benefit
      </button>

      <br />

      {preparationFields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`preparations.${index}` as const)} />
          <button onClick={() => removePreparation(index)}>Delete</button>
          <br />
        </div>
      ))}

      <button
        type="button"
        onClick={() => appendPreparation("Increases Immunity")}
      >
        Add a Preparation
      </button>

      <br />

      <label>Name</label>
      <input type="text" {...register("name")} />
      <br />
      <label>Items In Stock</label>
      <input type="number" {...register("itemsInStock")} />
      <br />
      <label>Category</label>
      <input type="text" {...register("category")} />
      <label>Base Quantity</label>
      <input type="text" {...register("baseQuantity")} />
      <label>Price</label>
      <input type="text" {...register("price")} />

      <input type="submit" />
    </form>
  );
};

export default AddProduct;
