import React, { FC, PropsWithChildren, use, useState } from "react";
import { Product } from "interfaces/types";
import { useSelector } from "react-redux";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const [review, setReview] = useState("");

  //Todo: Fix the user store
  const user = useSelector((state: any) => state.auth);
  console.log(user);

  const onReviewSubmit = () => {
    addDoc(collection(db, "reviews"), {
      user: doc(db, "users/" + auth.currentUser?.uid),
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
