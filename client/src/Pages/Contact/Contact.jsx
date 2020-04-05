import React, { Component } from "react";
import Parallax from "react-rellax";
import { IoIosPaperPlane } from "react-icons/io";

import "./style.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <Parallax speed={-10}>
          <div
            style={{
              backgroundColor: "grey",
              borderRadius: 25,
              height: 460,
              width: 300,
              marginTop: 40,
            }}
          >
            <form action="" className="form-style">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email " />
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>

              <button
                type="submit"
                style={{
                  backgroundColor: "white",
                  borderRadius: 40,
                  border: "none",
                  width: 40,
                  height: 40,
                }}
              >
                <IoIosPaperPlane size={30} color="blue" />
              </button>
            </form>
          </div>
        </Parallax>

        <Parallax speed={3}>
          <div
            style={{
              backgroundColor: "blue",
              borderRadius: 25,
              height: 460,
              width: 300,
              marginTop: "auto",
              marginTop: 120,
            }}
          >
            <p>some info here</p>
          </div>
        </Parallax>
      </div>
    );
  }
}
