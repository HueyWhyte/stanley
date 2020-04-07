import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import ProjectCard from "../../Components/ProjectCard";
import { fetchProjects } from "../../redux/actions/projectAction";

import data from "../../assets/data";
import ClearSpace from "../../Components/clearSpace";

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <div className="projects-container">
        <ClearSpace />

        <section className="data-container">
          {data &&
            data.map((project) => (
              <ProjectCard
                key={project._id}
                id={project._id}
                category={project.category}
                name={project.name}
                slogan={project.slogan}
                description={project.description}
                imageUri={project.imageUri}
                timestamp={project.timestamp}
              />
            ))}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.items,
  };
};

export default connect(mapStateToProps, { fetchProjects })(Projects);
