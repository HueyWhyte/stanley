import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { IoIosFolderOpen, IoMdHome } from "react-icons/io";

import "./style.css";
export default function NavigationBar() {
  const [nav, setNav] = useState(false);

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
  return (
    <div
      className="NavigationBar"
      style={{ backgroundColor: nav ? "#fff" : null, height: nav ? 50 : 60 }}
    >
      {/* <h1>NavigationBar</h1> */}
      <NavLink
        exact
        to="/"
        className="nav-item"
        activeClassName="active-nav-btnOne"
      >
        {/* <IoMdHome size={20} color="grey" /> */}
        Home
      </NavLink>
      <NavLink
        exact
        to="/projects"
        className="nav-item"
        activeClassName="active-nav-btnTwo"
      >
        {/* <IoIosFolderOpen size={20} color="grey" /> */}
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
        exact
        to="/contact"
        className="nav-item"
        activeClassName="active-nav-btnFour"
      >
        Contact
      </NavLink> */}
    </div>
  );
}
