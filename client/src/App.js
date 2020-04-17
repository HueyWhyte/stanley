import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/ProjectDetails";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";
import ErrorPage from "./Pages/ErrorPage";
import Admin from "./Pages/Admin";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <NavigationBar />
          </div>
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
          <Footer />
        </Router>
      </div>
    );
  }
}
