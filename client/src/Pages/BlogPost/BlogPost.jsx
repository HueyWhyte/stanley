import React, { Component } from "react";
import ClearSpace from "../../Components/clearSpace";

import "./style.css";

export default class BlogPost extends Component {
  render() {
    return (
      <div className="blog-post-container">
        <ClearSpace />
        <h1>BlogPost </h1>
      </div>
    );
  }
}
