import React, { FC, useState } from "react";
import { Product } from "interfaces/types";
import { useDispatch, useSelector } from "react-redux";
import { doc, Timestamp } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import { auth, db } from "../../firebase";
import Image from "next/image";
import { addToCart } from "store/features/cartSlice";

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const [review, setReview] = useState("");

  const dispatch = useDispatch();

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
      {product.images.map((image) => (
        <Image
          width={180}
          height={180}
          alt={product.name}
          src={image}
          key={image}
        />
      ))}
      <button onClick={() => dispatch(addToCart({ quantity: 1, product }))}>
        Add To Cart
      </button>
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
