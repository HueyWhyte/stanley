import React, { Component } from "react";
import "./style.css";

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="errorpage">
        <h1>
          the page you are looking for cannot be found or is under maintainance
        </h1>
      </div>
    );
  }
}
