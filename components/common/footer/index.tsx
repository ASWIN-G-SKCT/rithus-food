import React from "react";
import Image from "next/image";
import { useState } from "react";
import styles from "./footer.module.css";

function Footer() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <footer className={styles.footer}>
      <Image src={require("public/Icons/Copywrite.svg")} alt="Copywrite icon" />
      <h3>Rithus Foods</h3>
      {/* <Image src={require("public/Icons/Dot.svg")} alt="Dot icon" />
      <h3>Designed by InExore</h3> */}
      <Image src={require("public/Icons/Dot.svg")} alt="Dot icon" />
      <h3>Policy</h3>
      <Image src={require("public/Icons/Dot.svg")} alt="Dot icon" />
      <Image
        src={require("public/Icons/FSSAI.svg")}
        alt="fssai icon"
        style={{ width: "53.71px", height: "34px" }}
        onClick={handleClick}
      />
      {showText && (
        <div>
          <h2>22421561000185</h2>
        </div>
      )}
    </footer>
  );
}

export default Footer;
