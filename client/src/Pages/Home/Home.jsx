import React, { Component } from "react";
import Parallax from "react-rellax";

import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "calc(100vh - 50px)", padding: 12 }}>
          <p>column 1</p>
        </div>
        <div style={{ height: "100vh", backgroundColor: "green" }}>
          <p>column 1</p>
          <Parallax speed={-2}>I'm slow and smooth</Parallax>
        </div>
        <div style={{ height: "100vh", backgroundColor: "yellow" }}>
          <p>column 1</p>
        </div>
      </div>
    );
  }
}
