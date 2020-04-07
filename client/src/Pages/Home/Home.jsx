import React, { Component } from "react";
import Parallax from "react-rellax";
import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <>
        <section className="first-section">
          <Parallax speed={2}>
            <p style={{ color: "white", fontSize: 40 }}>Hello, I'm </p>
          </Parallax>
          <Parallax speed={-3.5}>
            <p
              style={{
                color: "orange",
                fontSize: 80,
                fontWeight: "bold",
                margin: 20,
              }}
            >
              Stanley Otabil
            </p>
          </Parallax>
          <Parallax speed={5}>
            <p style={{ color: "white", fontSize: 40 }}>
              I'm a full-stack web developer
            </p>
          </Parallax>
        </section>

        <section style={{ height: "100vh", backgroundColor: "yellow" }}>
          <p>column 1</p>
          <Parallax speed={-2}>I'm slow and smooth</Parallax>
        </section>

        <section style={{ height: "100vh" }}>
          <p>column 1</p>
        </section>
      </>
    );
  }
}
