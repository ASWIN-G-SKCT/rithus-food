import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./rating.module.css";

const Rating = () => {
  return (
    <div className={styles.rating}>
      <Image src={require("public/Icons/star_filled.svg")} alt="star filled" />
      <Image src={require("public/Icons/star_filled.svg")} alt="star filled" />
      <Image src={require("public/Icons/star_filled.svg")} alt="star filled" />
      <Image src={require("public/Icons/star_filled.svg")} alt="star filled" />
      <Image src={require("public/Icons/star.svg")} alt="star" />
    </div>
  );
};

export default Rating;
