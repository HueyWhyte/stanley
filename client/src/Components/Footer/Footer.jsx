import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoLinkedin,
} from "react-icons/io";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <section className="firstSection">
        <img
          src={require("../../assets/img/stan.png")}
          style={{ width: 60 }}
          alt=""
        />
        <p style={{ textAlign: "center" }}>Website made by Me with Love</p>
      </section>
      <section className="secendSection"></section>
      <section className="socialIcons">
        <a
          href="https://www.linkedin.com/in/stanleykwaminaotabil/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin size={25} color="#0000d1" />
        </a>
        <a
          href="https://www.instagram.com/kwamina_whyte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram size={25} color="red" />
        </a>
        <a
          href="https://twitter.com/HueyWhyte"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter size={25} color="#1da1f2" />
        </a>
        <a
          href="https://www.pinterest.com/hueywhyte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoPinterest size={25} color="red" />
        </a>
      </section>
    </footer>
  );
}
