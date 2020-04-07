import React from "react";
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoLinkedin,
} from "react-icons/io";
import { useSpring, animated } from "react-spring";
import "./style.css";

export default function Footer() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const props2 = useSpring({
    to: {
      opacity: 1,
      marginTop: 0,
      color: "blue",
    },
    from: {
      opacity: 0,
      marginTop: -400,
      color: "red",
    },
    config: {
      delay: 1500,
      duration: 1500,
    },
  });

  return (
    <footer>
      <section className="firstSection">
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
          (Fast) Fast load times and lag free interaction, my highest priority.
        </p>
      </section>
      <section className="socialIcons">
        <a
          href="http://https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoLinkedin size={25} color="#0000d1" />
        </a>
        <a
          href="http://www.instagram.com/Kwamina_Whyte/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoInstagram size={25} color="red" />
        </a>
        <a
          href="http://https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter size={25} color="#1da1f2" />
        </a>
        <a
          href="http://https://twitter.com/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoPinterest size={25} color="red" />
        </a>
      </section>
      {/* <animated.div style={props}>I will fade in</animated.div>
      <animated.div style={props2}>
        <h1>every other code here</h1>
      </animated.div> */}
    </footer>
  );
}
