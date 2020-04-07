import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { ThemeProvider } from "styled-components";
import "./App.css";
// import { lightTheme, darkTheme } from "./theme";
// import { GlobalStyles } from "./global";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/ProjectDetails";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import ErrorPage from "./Pages/ErrorPage";
import Welcome from "./Pages/Welcome";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";

function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };

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
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Welcome />
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

export default App;

// <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
//   <GlobalStyles />
//   <button onClick={toggleTheme}>Toggle theme</button>
//   <h1>It's a light theme!</h1>
//   <footer></footer>

//   <div className="App">
//     <Router>
//       <NavigationBar />
//       <div style={{ height: 52 }}></div>
//       <Switch>
//         <Route path="/projects">
//           <Projects />
//         </Route>
//         <Route exact path="/home">
//           <Home />
//         </Route>
//       </Switch>
//     </Router>
//   </div>
// </ThemeProvider>;
