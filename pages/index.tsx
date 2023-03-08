import Link from "next/link";
import styles from "styles/Home.module.css";
import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* <Link href={"/login"}>Login</Link>
    //   <Link href={"/register"}>Register</Link>
    //   <Link href={"/products"}>Products</Link>
    // <Link href={"/cart"}>Cart</Link> */}
      <div className={styles.main}>
        <div className={styles.intro}>
          <h2>
            Your health is our business. So the choice is yours to make you
            healthy.
          </h2>
        </div>
        <div className={styles.intro}>
          <h2>
            Your health is our business. So the choice is yours to make you
            healthy.
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
        <Image src={require("public/Assets/Bowl.svg")} alt="bowl of grains" />
      </div>
    </>
  );
}
