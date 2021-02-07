import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import BlogPost from "./Pages/BlogPost/BlogPost";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Admin from "./Pages/Admin/Admin";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import LeftNav from "./Components/LeftNav";

export default class App extends Component {
  render() {
    return (
      <Router>
        <section style={{ display: "flex", flexDirection: "row" }}>
          <LeftNav />
          <NavigationBar />

          <Switch>
            <Route exact path="/projects/:id" component={ProjectDetails} />

            <Route exact path="/projects" component={Projects} />

            <Route exact path="/blog/:id">
              <BlogPost />
            </Route>

            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/admin">
              <Admin />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </section>
      </Router>
    );
  }
}
