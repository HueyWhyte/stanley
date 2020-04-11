import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class BlogCard extends Component {
  render() {
    return (
      <Link to={`blog/${this.props.id}`} className="blog-card">
        <img
          src={require("../../assets/img/app.jpg")}
          style={{
            width: 330,
            borderRadius: 12,
          }}
          alt=""
        />
        <div style={{ margin: 5 }}>
          <h1 style={{ color: "var(--dark-grey)", fontSize: 30 }}>
            Article Title
          </h1>
          <p style={{ color: "var(--medium-grey)", fontSize: 19 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptas quam, vel earum iure consectetur eveniet nemo
            est expedita, quas labor...
          </p>
          <p
            style={{
              color: "var(--light-grey)",
              fontSize: 15,
              marginLeft: "auto",
              width: 120,
              textAlign: "end",
              marginTop: 12
            }}
          >
            1 JAN 2020
          </p>
        </div>
      </Link>
    );
  }
}
