import React, { Component } from "react";
import { connect } from "react-redux";
import ClearSpace from "../../Components/clearSpace";
import "./style.css";
import { newProject } from "../../redux/actions/projectAction";

class Admin extends Component {
  state = {
    category: "",
    name: "",
    slogan: "",
    description: "",
    imageUrl: "",
    date: "",
  };

  componentDidMount() {
    const d = new Date();
    const dtf = new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
      d
    );
    const nDate = `${da} ${mo} ${ye}`;

    this.setState({ date: nDate });
  }

  submitNewProject = (e) => {
    e.preventDefault();

    const project = {
      category: this.state.category,
      name: this.state.name,
      slogan: this.state.slogan,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      date: this.state.date,
    };

    this.props.newProject(project);
  };

  handleInput = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(name, value);
  };

  render() {
    console.log(this.state.date);
    
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
            name="slogan"
            value={this.state.slogan}
            placeholder="slogan"
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
