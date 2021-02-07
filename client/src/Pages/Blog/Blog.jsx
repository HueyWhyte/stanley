import React, { Component } from "react";
import "./style.css";
import BlogCard from "../../Components/BlogCard";

export default class Blog extends Component {
  render() {
    return (
      <div className="blog-container">
        <section className="main-blog-section">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </section>
      </div>
    );
  }
}
