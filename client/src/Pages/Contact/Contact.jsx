import React, { Component } from "react";
import styled from "styled-components";
import { IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import "./style.css";

const ContactContainer = styled.section`
  display: flex;
  height: calc(100vh - 50px);
  background-color: #383838;
  flex-direction: column;
  padding-top: 60px;
  width: 100%;
`;

const SocialIcons = styled.section`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: auto;
`;

export default class Contact extends Component {
  render() {
    return (
      <ContactContainer>
        <section
          style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <h1 style={{ color: "white", fontSize: 45 }}>Contact me</h1>

          <p style={{ color: "#cccccc", fontSize: 19, marginTop: 30 }}>
            I'm interested in freelance opportunities - especially ambitious and
            large projects. However if you have other request or question, dont
            hesitate to contact me.
          </p>
        </section>

        <SocialIcons>
          <a
            href="https://www.linkedin.com/in/stanleykwaminaotabil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={53} color="#f5f5f5" />
          </a>
          <a
            href="https://twitter.com/KwaminaWhyte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter size={50} color=" #f5f5f5" />
          </a>
          <a
            href="https://www.instagram.com/kwamina_whyte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram size={53} color=" #f5f5f5" />
          </a>
        </SocialIcons>
      </ContactContainer>
    );
  }
}
