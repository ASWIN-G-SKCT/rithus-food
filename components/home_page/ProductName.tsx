import React from "react";
import styles from "./ProductName.module.css";

function ProductName(props: any) {
  return (
    <div
      className={`${styles.container} ${
        props.pageName === "Testimonials" && styles.testimonials
      }`}
    >
      <h5>.0{props.page}.</h5>
      <h3>{props.pageName}</h3>
      <div className={styles.cube} />
    </div>
  );
}

export default ProductName;
