import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={require("public/Icons/Copywrite.svg")} alt="Copywrite icon" />
      <h3>Rithus Foods</h3>
      <Image src={require("public/Icons/Dot.svg")} alt="Dot icon" />
      <h3>Designed by InExore</h3>
      <Image src={require("public/Icons/Dot.svg")} alt="Dot icon" />
      <h3>Policy</h3>
    </footer>
  );
}

export default Footer;
