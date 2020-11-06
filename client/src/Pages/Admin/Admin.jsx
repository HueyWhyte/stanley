import React, { Component } from "react";
import { connect } from "react-redux";
import ClearSpace from "../../Components/clearSpace";
import "./style.css";
import { newProject } from "../../redux/actions/projectAction";

class Admin extends Component {
  state = {
    category: "",
    name: "",
    description: "",
    projectLink: "",
    imageUrl: "",
  };

  submitNewProject = (e) => {
    e.preventDefault();

    const project = {
      category: this.state.category,
      name: this.state.name,
      description: this.state.description,
      projectLink: this.state.projectLink,
      imageUrl: this.state.imageUrl,
    };

    this.props.newProject(project);
  };

  handleInput = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };

  render() {
    return (
      <div className="admin-container">
        <ClearSpace />

        <h1>Admin Page</h1>

        <form
          onSubmit={this.submitNewProject}
          style={{
            display: "flex",
            width: 400,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <select
            name="category"
            value={this.state.category}
            onChange={this.handleInput}
            id=""
          >
            <option>Select project category</option>
            <option value="APP">APP</option>
            <option value="DESKTOP">DESKTOP</option>
            <option value="UI/UX">UI/UX</option>
            <option value="WEBSITE">WEBSITE</option>
          </select>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleInput}
          />

          <input
            type="text"
            name="description"
            value={this.state.description}
            placeholder="description"
            onChange={this.handleInput}
          />

          <input
            type="text"
            name="projectLink"
            value={this.state.projectLink}
            placeholder="projectLink"
            onChange={this.handleInput}
          />

          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            placeholder="imageUrl"
            onChange={this.handleInput}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { newProject })(Admin);
