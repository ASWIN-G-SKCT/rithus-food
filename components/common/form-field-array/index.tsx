import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

const FieldArray = ({ control }: any) => {
  const {
    fields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  } as never);
  return (
    <>
      {fields.map((field, index) => (
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
    </>
  );
};

export default FieldArray;
