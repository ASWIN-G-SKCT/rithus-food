import React from "react";
import styles from "./Testimonial.module.css";
import Image from "next/image";
import Rating from "components/common/rating";

function ProductName(props: any) {
  const photos = props.data.photos;
  const videos = props.data.videos;
  return (
    <div className={styles.container}>
      <div className={styles.testimonial}>
        <div className={styles.mediaContainer}>
          {photos.map((data: any, index: number) => {
            return (
              <img
                loading="lazy"
                src={data}
                key={index}
                alt="testimonial media"
              />
            );
          })}
          {videos.map((data: any, index: number) => {
            return (
              <video controls key={index}>
                <source src={data} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            );
          })}
        </div>
        <div className={styles.reviewContainer}>
          <div className={styles.header}>
            <p>{props.data.name}</p>
            <Rating rating={props.data.rating} />
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
