import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  IoIosFolderOpen,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdHome,
} from "react-icons/io";
import styled from "styled-components";

import { device } from "../assets/media";

const LeftNacContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 60px;
  background-color: #1d1d1d;
  height: 100vh;
  align-items: center;

  @media ${device.mobile} {
    display: none;
  }
`;

const SocialIcons = styled.section`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: space-evenly;
  margin-top: auto;
`;

export default class LeftNav extends Component {
  render() {
    return (
      <LeftNacContainer className="LeftNav">
        <img
          src={require("../assets/img/stan.png")}
          style={{ width: 55, height: 55 }}
          alt=""
        />

        <NavLink
          exact
          to="/"
          className="nav-item"
          activeClassName="active-nav-btn"
        >
          <IoMdHome size={23} color="grey" />
        </NavLink>
        <NavLink
          exact
          to="/projects"
          className="nav-item"
          activeClassName="active-nav-btn"
        >
          <IoIosFolderOpen size={23} color="grey" />
        </NavLink>

        <SocialIcons>
          <a
            href="https://www.linkedin.com/in/stanleykwaminaotabil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={23} color="#f5f5f5" />
          </a>
          <a
            href="https://www.instagram.com/kwamina_whyte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram size={23} color=" #f5f5f5" />
          </a>
          <a
            href="https://twitter.com/HueyWhyte"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter size={20} color=" #f5f5f5" />
          </a>
        </SocialIcons>
      </LeftNacContainer>
    );
  }
}
