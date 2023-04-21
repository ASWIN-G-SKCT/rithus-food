import React from "react";
import styles from "./Testimonial.module.css";
import Image from "next/image";
import Rating from "components/common/rating";

function ProductName(props: any) {
  return (
    <div className={styles.container}>
      <div className={styles.testimonial}>
        <div className={styles.mediaContainer}>
          <Image
            src={require("public/Assets/test/baby1.png")}
            alt="testimonial media"
          />
          <Image
            src={require("public/Assets/test/baby1.png")}
            alt="testimonial media"
          />
        </div>
        <div className={styles.reviewContainer}>
          <div className={styles.header}>
            <p>Mrs.Sowbarnika</p>
            <Rating />
          </div>
          <p className={styles.city}>Bangalore</p>
          <div className={styles.body}>
            <p>
              I have used many products from rithu foods which ma daughter liked
              so much it's unlike other products we buy from outside...it's so
              helpful when we travel nd taste is also 😋...i like the way they
              put so much hard work to prepare those items with full hygiene nd
              quality.the shelf life lasts long.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductName;
