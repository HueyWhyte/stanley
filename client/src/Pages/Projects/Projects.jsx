import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import "./style.css";
import ProjectCard from "../../Components/ProjectCard";
import { fetchProjects } from "../../redux/actions/projectAction";
import data from "../../assets/data";

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: #383838;
`;
class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <ProjectsContainer>
        <section className="data-container">
          {data &&
            data.map((project) => (
              <ProjectCard
                key={project._id}
                id={project._id}
                category={project.category}
                name={project.name}
                projectLink={project.projectLink}
                description={project.description}
                imageUrl={project.imageUrl}
                date={project.date}
              />
            ))}
        </section>
      </ProjectsContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projects.items,
  };
};

export default connect(mapStateToProps, { fetchProjects })(Projects);
