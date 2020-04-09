import React, { Component } from "react";
import { connect } from "react-redux";
import "./style.css";
import { colorChanger, headerImageChanger } from "../../assets/UIChangers";
import { fetchProject } from "../../redux/actions/projectAction";
import ClearSpace from "../../Components/clearSpace";

class ProjectDetails extends Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.fetchProject(id);
  }

  render() {
    let { project } = this.props;

    return (
      <div className="project-detail-container">
        <ClearSpace />

        <section
          className="bg-header-image"
          style={{
            background: `url(${headerImageChanger(
              `${project.category}`
            )}) no-repeat center fixed`,
            backgroundSize: "cover",
          }}
        >
          <h4 style={{ fontSize: 16, color: colorChanger(project.category) }}>
            {project.category}
          </h4>
          <h1 style={{ fontSize: 55, margin: 12, color: "white" }}>
            {project.name}
          </h1>
          <h3>{project.slogan}</h3>
        </section>

        <section className="info-section">
          <div
            style={{
              padding: 12,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1 style={{ color: "#1a1a1a" }}>Description</h1>
            <p style={{ marginBottom: 15, fontSize: 18, color: "#303030" }}>
              {project.description}
            </p>

            <h1 style={{ color: "#1a1a1a" }}>Stacks</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <p className="tags">#ReactJS</p>
              <p className="tags">#React Native</p>
              <p className="tags">#Redux</p>
              <p className="tags">#MongoBD</p>
            </div>

            <p style={{ color: "#b9b9b9", marginLeft: "auto", fontSize: 14 }}>
              {project.timeStamp}SEPTEMBER 2020
            </p>
          </div>
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
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              alt=""
            />
            <h2
              style={{
                width: "97%",
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
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              alt=""
            />
            <h2
              style={{
                width: "97%",
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

const mapStateToProps = (state) => {
  return {
    project: state.projects.item,
  };
};

export default connect(mapStateToProps, { fetchProject })(ProjectDetails);
