import React from "react";
import styles from "./Testimonial.module.css";

function ProductName(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.testimonial}>
        <div className={styles.mediaContainer}></div>
        <div className={styles.reviewContainer}></div>
      </div>
    </div>
  );
}

export default ProductName;
