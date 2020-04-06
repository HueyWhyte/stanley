import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import { IoIosFolderOpen, IoMdHome } from "react-icons/io";

import "./style.css";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">
        {/* <h1>NavigationBar</h1> */}
        <NavLink
          to="/home"
          className="nav-item"
          activeClassName="active-nav-btnOne"
        >
          {/* <IoMdHome size={20} color="grey" /> */}
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-item"
          activeClassName="active-nav-btnTwo"
        >
          {/* <IoIosFolderOpen size={20} color="grey" /> */}
          Projects
        </NavLink>
        <NavLink
          to="/blog"
          className="nav-item"
          activeClassName="active-nav-btnThree"
        >
          Blog
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-item"
          activeClassName="active-nav-btnFour"
        >
          Contact
        </NavLink>
      </div>
    );
  }
}
