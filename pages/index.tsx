import { useState } from "react";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Image from "next/image";
import useMousePosition from "hooks/useMousePosition";
import ProductName from "components/home_page/ProductName";
import Footer from "components/common/footer";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const { x, y } = useMousePosition();
  const paginationHandler = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {/* <div className={`${styles.page} ${styles.intro}`}>
          <h2>
            Your health is our business. So the choice is yours to make you
            healthy.
          </h2>
        </div>
        <div className={`${styles.page}`}>
          <ProductName page="01" pageName={`Rice Powder \nVarieties`} />
        </div>
        <div className={`${styles.page}`}>
          <ProductName page="02" pageName={`Nut Powder \nVarieties`} />
        </div>
        <div className={`${styles.page}`}>
          <ProductName page="03" pageName={`Travel Food \nVarieties`} />
        </div>
        <div className={`${styles.page}`}>
          <ProductName page="04" pageName={`Instant Drink \nMix`} />
        </div>
        <div className={`${styles.page}`}>
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
        </div>
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
          <div
            className={`${styles.page_dot} ${
              currentPage == 8 && styles.active
            }`}
            onClick={() => paginationHandler(8)}
          ></div>
        </div>
        <Image
          src={require("public/Assets/Bowl.svg")}
          alt="bowl of grains"
          style={{
            translate: `${x}px ${y}px`,
          }}
        />
        <div className={styles.contact_us_props}>
          <Image
            src={require("public/Assets/Props/almond.svg")}
            alt="CUAlmond"
            style={{
              translate: `${-x + 2}px ${-y + 1}px`,
            }}
          />
          <Image
            src={require("public/Assets/Props/pista.svg")}
            alt="CUPista"
            style={{
              translate: `${x + 4}px ${-y + 2}px`,
            }}
          />
          <Image
            src={require("public/Assets/Props/haslenut.svg")}
            alt="CUHasle"
            style={{
              translate: `${-x + 3}px ${y + 1}px`,
            }}
          />
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
