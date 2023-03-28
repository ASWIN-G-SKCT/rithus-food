import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Image from "next/image";
import useMousePosition from "hooks/useMousePosition";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import ProductName from "components/home_page/ProductName";
import Footer from "components/common/footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const { x, y } = useMousePosition();

  const paginationHandler = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <ReactScrollWheelHandler
      upHandler={(e) => {
        setCurrentPage(currentPage - 1 < 0 ? 0 : currentPage - 1);
      }}
      downHandler={(e) => {
        setCurrentPage(currentPage + 1 > 7 ? 7 : currentPage + 1);
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.STD}>
            <Image
              src={require("public/Icons/Arrow.svg")}
              alt="arrow down icon"
            />
            <h4>Scroll to discover</h4>
          </div>

          <div className={styles.pagination}>
            <div
              className={`${styles.page_dot} ${
                currentPage == 0 && styles.active
              }`}
              onClick={() => paginationHandler(0)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 1 && styles.active
              }`}
              onClick={() => paginationHandler(1)}
            ></div>

            <div
              className={`${styles.page_dot} ${
                currentPage == 2 && styles.active
              }`}
              onClick={() => paginationHandler(2)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 3 && styles.active
              }`}
              onClick={() => paginationHandler(3)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 4 && styles.active
              }`}
              onClick={() => paginationHandler(4)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 5 && styles.active
              }`}
              onClick={() => paginationHandler(5)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 6 && styles.active
              }`}
              onClick={() => paginationHandler(6)}
            ></div>
            <div
              className={`${styles.page_dot} ${
                currentPage == 7 && styles.active
              }`}
              onClick={() => paginationHandler(7)}
            ></div>
          </div>
          <Image
            className={styles.parallax_img}
            src={require("public/Assets/Bowl.svg")}
            alt="bowl of grains"
            style={{
              translate: `${50 * currentPage}% ${y}px`,
              transform: `translateX(${x}px) translateY(${y}px)`,
              rotate: `${60 * currentPage}deg`,
            }}
          />
          <Footer />
        </div>

        <div
          className={`${styles.page} ${styles.intro}`}
          style={{
            transform: `translateY(${100 * -currentPage}%)`,
          }}
        >
          <h2>
            Your health is our business. So the choice is yours to make you
            healthy.
          </h2>
        </div>

        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 1)}%)`,
          }}
        >
          <ProductName
            page={1}
            pageName={`Rice Powder \nVarieties`}
            currentPage={currentPage}
          />
        </div>
        <div
          className={`${styles.page} ${styles.productImg} `}
          style={{
            transform: `translateY(${100 * -(currentPage - 1)}%)`,
          }}
        >
          <Image
            className={styles.parallax_img}
            src={require("public/Assets/Products/RedRicePowder.svg")}
            alt="red rice powder"
            style={{
              translate: `${x}px ${y}px`,
            }}
          />
        </div>

        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 2)}%)`,
          }}
        >
          <ProductName
            page={2}
            pageName={`Nut Powder \nVarieties`}
            currentPage={currentPage}
          />
        </div>
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 3)}%)`,
          }}
        >
          <ProductName
            page={3}
            pageName={`Travel Food \nVarieties`}
            currentPage={currentPage}
          />
        </div>
        <div
          className={`${styles.page} ${styles.title}`}
          style={{
            transform: `translateY(${100 * -(currentPage - 4)}%)`,
          }}
        >
          <ProductName
            page={4}
            pageName={`Instant Drink \nMix`}
            currentPage={currentPage}
          />
        </div>
        {/*<div className={`${styles.page}`}>
          <ProductName page="05" pageName={`Founder's \nNote`} />
          <div className={styles.founders_note}>
            <p>From K Swathi ,</p>
            <p>
              When I started making baby food products, we were able to see the
              difference in quality from most products in the market. We felt
              safe using it on our infant. I then started a small scale women
              based unit, where I employ local expert mothers to make Rithus
              food products by natural and ayurvedic formulations of
              ingredients, which is 100% safe and best in quality. Our products
              can now be used from 6+ months babies to adults.
            </p>
          </div>
        </div>
        <div className={`${styles.page}`}>
          <ProductName page="06" pageName={`Contact \nUs`} />
          <div className={styles.contact_us}>
            <p>Rithusbabyfoods@Gmail.Com</p>
            <p>+91 8110933444</p>
          </div>
        </div>
        <div className={`${styles.page}`}>
          <ProductName page="07" pageName="Testimonials" />
        </div>

        <div className={`${styles.page}`}>
          <h2>
            Your health is our business. So the choice is yours to make you
            healthy.
            {x} {y}
          </h2>
        </div> */}
      </div>
    </ReactScrollWheelHandler>
  );
}
