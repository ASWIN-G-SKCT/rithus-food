import React, { FC, PropsWithChildren, use, useState } from "react";
import { Product } from "interfaces/types";
import { useSelector } from "react-redux";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../firebase";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const [review, setReview] = useState("");

  //Todo: Fix the user store
  const userId = useSelector((state: any) => state?.user)?.user?.id;

  const onReviewSubmit = () => {
    addDoc(collection(db, "reviews"), {
      user: userId,
      text: review,
      product: product._id,
      stars: 5,
      date: Timestamp.fromDate(new Date("December 10, 1815")),
    }).then(() => alert("Review Submitted"));
  };

  return (
    <div>
      <div key={product._id}>{JSON.stringify(product)}</div>

      <input
        placeholder="review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />
      <button onClick={onReviewSubmit}>Submit</button>
    </div>
  );
};

export default ProductCard;
