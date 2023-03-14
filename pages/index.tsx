import { useState } from "react";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Image from "next/image";
import useMousePosition from "hooks/useMousePosition";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const { x, y } = useMousePosition();
  const paginationHandler = (page: any) => {
    setCurrentPage(page);
  };
  return (
    <>
      {/* <Link href={"/login"}>Login</Link>
    //   <Link href={"/register"}>Register</Link>
    //   <Link href={"/products"}>Products</Link>
    // <Link href={"/cart"}>Cart</Link> */}
      <div className={styles.main}>
        <div className={`${styles.page} ${styles.intro}`}>
          <h2>
            Your health is our business. So the choice is yours to make you
            healthy.
          </h2>
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
      </div>
      <div className={styles.wrapper}>
        <Image
          src={require("public/Assets/Bowl.svg")}
          alt="bowl of grains"
          style={{
            translate: `${x}px ${y}px`,
          }}
        />
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
      </div>
    </>
  );
}
