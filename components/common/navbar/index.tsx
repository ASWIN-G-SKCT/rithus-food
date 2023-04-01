import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import styles from "./navbar.module.css";
import Footer from "../footer";

const Navbar = () => {
  const { user } = useSelector((state: any) => state?.auth);
  const { pathname } = useRouter();

  const [menu, setMenu] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h1>Rithus</h1>
          <h1>Foods</h1>
        </div>
        {pathname === "/" && user?.admin && <Link href={"/admin"}>Admin</Link>}
        <div className={styles.actions}>
          <h3 className={styles.moms_choice}>Mom's Choice</h3>
          <Image src={require("public/Icons/Search.svg")} alt="Search Icon" />
          <Image src={require("public/Icons/User.svg")} alt="User Icon" />
          <Image src={require("public/Icons/Cart.svg")} alt="Cart Icon" />
          <Image
            src={require("public/Icons/Burger.svg")}
            alt="Burger Icon"
            onClick={() => setMenu(!menu)}
          />
        </div>
      </div>
      <div className={`${styles.menu} ${menu && styles.active}`}>
        <h2
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
        >
          Products
        </h2>
        <h2
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
        >
          Founder's Note
        </h2>
        <h2
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
        >
          Contact Us
        </h2>
        <footer
          className={styles.footer}
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
        >
          <h3>
            <Image
              src={require("public/Icons/Copywrite.svg")}
              alt="Copywrite icon"
            />
            Rithus Foods
            <Image src={require("public/Icons/Dot.svg")} alt="Dot icon" />
            Designed by InExore
            <Image src={require("public/Icons/Dot.svg")} alt="Dot icon" />
            Policy
          </h3>
        </footer>
      </div>
    </div>
  );
};

export default Navbar;
