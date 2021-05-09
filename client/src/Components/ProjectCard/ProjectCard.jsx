import React, { Component } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

import "./style.css";
import { colorChanger } from "../../assets/UIChangers";

const ProjectCardContainer = styled.a`
  background-color: white;
  width: 400px;
  margin: 12px;
  border-radius: 7px;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 0px 2px 6px #c9c9c9;
    transition-duration: 0.5s;
  }

  .project-img {
    width: 100%;
    border-radius: 7px;
    size: cover;
    box-shadow: 0px 4px 5px 0px grey;
  }
`;

export default class ProjectCard extends Component {
  render() {
    return (
      <ProjectCardContainer
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
            <p>{this.props.description}</p>
            <p>{this.props.date}</p>
          </section>
        </div>
      </ProjectCardContainer>
    );
  }
}
