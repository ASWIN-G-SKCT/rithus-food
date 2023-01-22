import React, { useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";

import { db, storage } from "@/firebase/index";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

type FormInputs = {
  name: string;
  itemsInStock: number;
  baseQuantity: string;
  category: string;
  description: string;
  benefits: string[];
  ingredients: string[];
  preparations: string[];
  price: number;
  images: FileList | undefined;
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
    const productImagesURI: string[] = await Promise.all(
      Array.from(data.images as FileList).map(async (file) => {
        const upload = await uploadBytes(
          ref(storage, "product_images/" + file.name),
          file
        );
        return getDownloadURL(upload.ref);
      })
    );

    await addDoc(collection(db, "products"), {
      ...data,
      images: productImagesURI,
      price: +data.price,
    });

    alert("Product added");
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
      <input type="number" {...register("price")} />

      <input type="file" {...register("images")} multiple></input>

      <input type="submit" />
    </form>
  );
};

export default AddProduct;
