import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./rating.module.css";

const Rating = (props: any) => {
  const stars = [];
  for (let i = 0; i < props.rating; i++) {
    stars.push(
      <Image
        src={require("public/Icons/star_filled.svg")}
        key={i}
        alt="star filled"
      />
    );
  }
  for (let i = 0; i < 5 - props.rating; i++) {
    stars.push(
      <Image src={require("public/Icons/star.svg")} key={i} alt="star" />
    );
  }
  return <div className={styles.rating}>{stars}</div>;
};

export default Rating;
