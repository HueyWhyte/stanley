import React, { Component } from "react";
import "./style.css";
import ClearSpace from "../../Components/clearSpace";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        <ClearSpace />

        <section className="main-blog-section">
          <h1>Blog Page</h1>
        </section>
      </div>
    );
  }
}
