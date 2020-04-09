import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import { colorChanger } from "../../assets/UIChangers";

export default class ProjectCard extends Component {
  render() {
    return (
      <Link className="project-card" to={`projects/${this.props.id}`}>
        <div>
          <img src={`${this.props.imageUrl}`} alt="" className="project-img" />
          <section>
            <p style={{ color: colorChanger(this.props.category) }}>
              {this.props.category}
            </p>
            <p>{this.props.name}</p>
            <p>{this.props.slogan}</p>
            <p>{this.props.timeStamp}</p>
          </section>
        </div>
      </Link>
    );
  }
}
