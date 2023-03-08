import Link from "next/link";
import styles from "styles/Home.module.css";
export default function Home() {
  return (
    <div>
      {/* <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/cart"}>Cart</Link> */}
      <div className={styles.main}>Home</div>
    </div>
  );
}
