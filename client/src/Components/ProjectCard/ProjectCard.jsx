import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "./style.css";
import { colorChanger } from "../../assets/UIChangers";

export default class ProjectCard extends Component {
  render() {
    return (
      <a
        href={`${this.props.projectLink}`}
        className="project-card"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <img src={`${this.props.imageUrl}`} alt="" className="project-img" />
          <section>
            <p style={{ color: colorChanger(this.props.category) }}>
              {this.props.category}
            </p>
            <p>{this.props.name}</p>
            <p>{this.props.date}</p>
          </section>
        </div>
      </a>
    );
  }
}
