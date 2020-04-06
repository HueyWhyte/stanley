import React, { Component } from "react";

import "./style.css";
import data from "../../assets/data";

import ProjectCard from "../../Components/ProjectCard";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        {data.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            category={project.category}
            name={project.name}
            slogan={project.slogan}
            description={project.description}
            timestamp={project.timestamp}
            imageUri={project.imageUri}
          />
        ))}
      </div>
    );
  }
}
