import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Link href={"/login"}>Login</Link>
      <Link href={"/register"}>Register</Link>
      <Link href={"/add-product"}>Add a Product</Link>
      <Link href={"/products"}>Products</Link>
    </>
  );
}
