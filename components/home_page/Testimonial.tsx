import React from "react";
import styles from "./Testimonial.module.css";
import Image from "next/image";
import Rating from "components/common/rating";

function ProductName(props: any) {
  const mediaData = props.data.media;
  return (
    <div className={styles.container}>
      <div className={styles.testimonial}>
        <div className={styles.mediaContainer}>
          {mediaData.map((data: any) => {
            return <img src={data} alt="testimonial media" />;
          })}
        </div>
        <div className={styles.reviewContainer}>
          <div className={styles.header}>
            <p>{props.data.name}</p>
            <Rating />
          </div>
          <p className={styles.city}>{props.data.city}</p>
          <div className={styles.body}>
            <p>{props.data.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductName;
