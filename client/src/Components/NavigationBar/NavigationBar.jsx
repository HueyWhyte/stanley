import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../assets/media";
import { IoIosFolderOpen, IoIosList } from "react-icons/io";

import "./style.css";

const NavigationBarContainer = styled.nav`
  top: 0px;
  display: flex;
  width: 100%;
  align-items: center;
  position: fixed;
  padding: 0 8px;
  z-index: 200;
  transition: all;
  transition-duration: 0.5s;

  @media ${device.tablet} {
    display: none;
  }
`;

const NavLinks = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  height: 50px;
  background-color: #1d1d1d;
  display: flex;
  text-align: justify;
  align-items: center;

  justify-content: space-around;

  @media ${device.tablet} {
    display: none;
  }
`;

export default function NavigationBar() {
  const [nav, setNav] = useState(false);
  const [toggleLinks, setToggleLinks] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", showNav);
  }, [nav]);

  const showNav = () => {
    if (window.scrollY > 70) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  const toggleLinkList = () => {
    if (toggleLinks) {
      setToggleLinks(false);
    } else {
      setToggleLinks(true);
    }
  };

  return (
    <>
      <NavigationBarContainer
        style={{
          backgroundColor: nav ? "#fff" : null,
          height: nav ? 50 : 60,
          boxShadow: nav ? "0px 0px 5px #00000075" : null,
        }}
      >
        <img
          src={require("../../assets/img/stan.png")}
          style={{ width: 30, height: 30, marginLeft: 12, marginRight: "auto" }}
          alt=""
        />

        <IoIosList
          onClick={toggleLinkList}
          size={30}
          color="grey"
          style={{ marginRight: 20 }}
        />
      </NavigationBarContainer>

      <NavLinks style={{ display: toggleLinks ? "flex" : "none" }}>
        <NavLink
          onClick={toggleLinkList}
          exact
          to="/"
          className="nav-item"
          // style={{ color: nav ? null : "white" }}
          activeClassName="active-nav-btnOne"
        >
          {/* <IoMdHome size={20} color="grey" /> */}
          Home
        </NavLink>

        <NavLink
          onClick={toggleLinkList}
          exact
          to="/projects"
          className="nav-item"
          activeClassName="active-nav-btnTwo"
        >
          Projects
        </NavLink>

        {/* <NavLink
        exact
        to="/blog"
        className="nav-item"
        activeClassName="active-nav-btnThree"
      >
        Blog
      </NavLink>  */}

        {/* <NavLink
          onClick={toggleLinkList}
          exact
          to="/contact"
          className="nav-item"
          activeClassName="active-nav-btnFour"
        >
          Contact
        </NavLink> */}
      </NavLinks>
    </>
  );
}
