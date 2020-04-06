import React, { Component } from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoLinkedin,
} from "react-icons/io";
// import { useSpring, animated } from "react-spring";

import "./style.css";

export default class Footer extends Component {
  render() {
    // const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
      <footer style={styles.footerContainer}>
        <section style={styles.firstsection}>
          <img
            src={require("../../assets/img/app.jpg")}
            style={{ width: 60 }}
            alt=""
          />
          <p>website made by me</p>
        </section>
        <section className="secendSection">
          <p>
            (Dynamic) Websites don't have to be static, I love making pages come
            to life.
          </p>

          <p> (Responsive) My layouts will work on any device, big or small.</p>

          <p>(Intuitive) Strong preference for easy to use, intuitive UX/UI.</p>

          <p>
            (Fast) Fast load times and lag free interaction, my highest
            priority.
          </p>
        </section>
        <section style={styles.socialIcons}>
          <a
            href="http://https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin size={25} color="grey" />
          </a>
          <a
            href="http://www.instagram.com/Kwamina_Whyte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram size={25} color="grey" />
          </a>
          <a
            href="http://https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoTwitter size={25} color="grey" />
          </a>
          <a
            href="http://https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoPinterest size={25} color="grey" />
          </a>
        </section>
        {/* <animated.div style={props}>I will fade in</animated.div>} */}
        {/* <animated.div
          from={{ opacity: 0, marginTop: -400 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 1000, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <h1>every other code here</h1>
            </div>
          )}
        </animated.div> */}
      </footer>
    );
  }
}

const styles = {
  footerContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  firstsection: {},
  socialIcons: {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "red",
    justifyContent: "space-evenly",
  },
};
