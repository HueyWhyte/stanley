import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-item"
          activeClassName="active-nav-btnTwo"
        >
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
