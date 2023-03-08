import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { user } = useSelector((state: any) => state?.auth);
  const { pathname } = useRouter();
  console.log(user);
  return (
    <div className={styles.navbar}>
      <div>
        <h1>Rithus</h1>
        <h1>Foods</h1>
      </div>
      {pathname === "/" && user?.admin && <Link href={"/admin"}>Admin</Link>}
      <div className={styles.actions}>
        <h3>Mom's Choice</h3>
        <Image
          src={require("../../../public/Icons/Search.svg")}
          alt="Search Icon"
        />
        <Image
          src={require("../../../public/Icons/User.svg")}
          alt="User Icon"
        />
        <Image
          src={require("../../../public/Icons/Cart.svg")}
          alt="Cart Icon"
        />
        <Image
          src={require("../../../public/Icons/Burger.svg")}
          alt="Burger Icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
