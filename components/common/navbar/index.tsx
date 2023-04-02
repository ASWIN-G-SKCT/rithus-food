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

  const [menu, setMenu] = useState(false);
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <div className={styles.logo} onClick={closeMenu}>
          <h1>Rithus</h1>
          <h1>Foods</h1>
        </div>
        {pathname === "/" && user?.admin && <Link href={"/admin"}>Admin</Link>}
        <div className={styles.actions}>
          <h3 className={styles.moms_choice} onClick={closeMenu}>
            Mom's Choice
          </h3>
          <Image
            src={require("public/Icons/Search.svg")}
            alt="Search Icon"
            onClick={closeMenu}
          />
          <Image
            src={require("public/Icons/User.svg")}
            alt="User Icon"
            onClick={closeMenu}
          />
          <Image
            src={require("public/Icons/Cart.svg")}
            alt="Cart Icon"
            onClick={closeMenu}
          />
          <div
            className={`${styles.burgerBtn} ${menu && styles.active}`}
            onClick={() => setMenu(!menu)}
          >
            <div className={styles.line} />
            <div className={styles.line} />
          </div>
        </div>
      </div>
      <div className={`${styles.menu} ${menu && styles.active}`}>
        <h2
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
          onClick={closeMenu}
        >
          <Link href={"#products"} shallow={true}>
            Products
          </Link>
        </h2>
        <h2
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
          onClick={closeMenu}
        >
          <Link href={"#FoundersNote"} shallow={true}>
            Founder's Note
          </Link>
        </h2>
        <h2
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
          onClick={closeMenu}
        >
          <Link href={"#ContactUs"} shallow={true}>
            Contact Us
          </Link>
        </h2>
        <div
          className={styles.socialMedia}
          style={{
            transform: `translateY(${100 * (menu ? 0 : 100)}%)`,
          }}
          onClick={closeMenu}
        >
          <Link
            href={
              "https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fc%2F918110933444&e=AT2h04znDrxP6lsjWLfkd6JN07QKrcDafRi5CvdH_MAcCc83uxl2G1e2s4GnjeBP419TeM1WkbtdPL-K21EtRvtLKelRp8O7qWzL1g"
            }
            target="_blank"
          >
            <Image
              src={require("public/Icons/whatsapp.svg")}
              alt="whatsapp icon"
            />
          </Link>
          <Link
            href={"https://instagram.com/rithus_baby_foods?igshid=YmMyMTA2M2Y="}
            target="_blank"
          >
            <Image
              src={require("public/Icons/instagram.svg")}
              alt="instagram icon"
            />
          </Link>
        </div>
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
