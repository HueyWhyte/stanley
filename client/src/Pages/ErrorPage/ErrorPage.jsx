import React, { Component } from "react";
import { IoIosArrowBack } from "react-icons/io";
import Parallax from "react-rellax";
import { Link } from "react-router-dom";
import "./style.css";

export default class ErrorPage extends Component {
  state = {
    showArrow: false,
  };

  showArrow = () => {
    setTimeout(() => {
      this.setState({ showArrow: !this.state.showArrow });
    }, 100);
  };

  render() {
    return (
      <div className="errorpage">
        <div className="err-container">
          <p style={{ fontSize: 120, color: "#ff6a6a" }}>404</p>
          <p style={{ fontSize: 28, textAlign: "center" }}>
            Looks like this page is missing. Don't worry though, our best man is
            on the case.
          </p>
          <p style={{ marginTop: 25, fontSize: 19, textAlign: "center" }}>
            Meanwhile, why don't you try again by going
          </p>
          <Parallax speed={-2}>
            <Link
              to="/"
              className="back-h-btn"
              onMouseOver={this.showArrow}
              onMouseLeave={this.showArrow}
            >
              {this.state.showArrow ? (
                <IoIosArrowBack size={18} color="white" />
              ) : null}
              BACK HOME
            </Link>
          </Parallax>
        </div>
      </div>
    );
  }
}
