import React, { Component } from "react";

import "./style.css";
import { colorChanger, headerImageChanger } from "../../assets/UIChangers";

export default class ProjectDetails extends Component {
  render() {
    return (
      <div className="project-detail-container">
        <section
          className="bg-header-image"
          style={{
            background: `url(${headerImageChanger(
              "DESKTOP"
            )}) no-repeat center fixed`,
            backgroundSize: "cover",
          }}
        >
          <h4 style={{ fontSize: 16, color: colorChanger("DESKTOP") }}>
            DESKTOP
          </h4>
          <h1 style={{ fontSize: 55, margin: 12, color: "white" }}>App Name</h1>
          <h3>Slogan of app quod corrupti, doloremque iusto</h3>
        </section>

        <section className="info-section">
          <h1 style={{ color: "#1a1a1a" }}>Description</h1>
          <p style={{ marginBottom: 15, fontSize: 18, color: "#303030" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi modi
            culpa sed voluptatibus voluptatem quod corrupti, doloremque iusto
            aliquam ipsa quo veniam quaerat consequatur deserunt incidunt
            quisquam ad fuga nesciunt!
          </p>
          <h1 style={{ color: "#1a1a1a" }}>Stacks</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p className="tags">ReactJS</p>
            <p className="tags">React Native</p>
            <p className="tags">Redux</p>
          </div>
          <p style={{ color: "#b9b9b9", marginLeft: "auto", fontSize: 14 }}>
            APRIL 2020
          </p>
        </section>

        <section className="images-section">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            <img
              src={require("../../assets/img/app.jpg")}
              style={{
                borderRadius: 12,
                margin: "6px auto",
                width: "90.5%",
                display: "flex",
                flexDirection: "column",
              }}
              alt=""
            />
            <h2
              style={{
                // backgroundColor: "red",
                width: "89%",
                padding: "0px 10px",
                margin: "8px auto",
                color: "#1a1a1a",
              }}
            >
              Landing Page – aims to be introduce Intent's mission and the
              problem it's trying to solve along with the products as solutions.
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              textAlign: "center",
              marginBottom: 28,
            }}
          >
            <img
              src={require("../../assets/img/desktop.jpg")}
              style={{
                borderRadius: 12,
                margin: "6px auto",
                width: "90.5%",
                display: "flex",
                flexDirection: "column",
              }}
              alt=""
            />
            <h2
              style={{
                width: "89%",
                padding: "0px 10px",
                margin: "8px auto",
                color: "#1a1a1a",
              }}
            >
              Launcher – an Android app launcher that lets you organize
              essentials and distractions.
            </h2>
          </div>
        </section>
      </div>
    );
  }
}
