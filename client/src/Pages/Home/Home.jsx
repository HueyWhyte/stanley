import React, { Component } from "react";
import Parallax from "react-rellax";
import { motion } from "framer-motion";
import "./style.css";

export default class Home extends Component {
  state = {
    yValue: 0,
  };

  componentDidMount() {
    // window.add/EventListener("scroll", this.handleScroll, true);
  }

  // componentWillMount() {
  // window.removeEventListener("scroll", this.handleScroll);
  // }

  handleScroll = () => {
    let SY = window.scrollY;
    // console.log(window.scrollY);

    // if (SY >= 300) {
    //   console.log("scroll event");
    // }
    let finiValue = SY / 2.9;
    // console.log(finiValue);

    this.setState({
      yValue: finiValue,
    });
  };

  render() {
    return (
      <>
        <section className="first-section">
          <Parallax speed={2}>
            <p style={{ color: "white", fontSize: 40 }}>My name is</p>
          </Parallax>
          <motion.div
            drag={true}
            dragConstraints={{ top: 1, left: 1, right: 1, bottom: 1 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },
            }}
          >
            <Parallax speed={-3.5}>
              <p
                style={{
                  color: "white",
                  fontSize: 70,
                  fontWeight: "600",
                }}
              >
                Kwamina
              </p>
            </Parallax>
          </motion.div>

          <Parallax speed={5}>
            <p style={{ color: "white", fontSize: 40 }}>
              I'm a Full-Stack Developer
            </p>
          </Parallax>
        </section>

        <section className="abt_me">
          <img
            src={require("../../assets/img/app.jpg")}
            className="abt_me_img"
            alt=""
          />

          <div className="abt_me_data">
            <p>who im I</p>
            <h1 style={{ fontSize: 50 }}>Hello</h1>

            <p
              style={{
                marginLeft: 12,
              }}
            >
              I'm a full stack developer with 4 years of experience. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Quas facilis dolor
              modi expedita, dolorem nam ipsam autem dolorum saepe architecto?
              Voluptates mollitia eius laudantium labore dolore officia eligendi
              maiores. Inventore.
            </p>
          </div>
        </section>

        <section className="dynamic">
          <div className="dynamic-text">
            <Parallax
              speed={-0.3}
              style={{
                width: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: 300,
                flexWrap: "wrap",
                backgroundColor: "blueviolet",
                borderTopLeftRadius: 100,
              }}
            >
              <Parallax speed={-1} style={{ paddingBottom: "auto" }}>
                <h1 style={{ fontSize: 60 }}>Dynamic</h1>
              </Parallax>
              <Parallax speed={1} style={{ marginTop: "auto" }}>
                <p style={{ fontSize: 20 }}>
                  Websites don't have to be static, I love making pages come to
                  life with Gestures and animations.
                </p>
              </Parallax>
            </Parallax>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",
              flexWrap: "wrap",
              flex: 2,
              minWidth: 300,
            }}
          >
            <motion.div
              drag
              dragConstraints={{ top: 1, left: 1, right: 1, bottom: 1 }}
              animate={{ opacity: 0 }}
              transition={{ loop: Infinity, duration: 1.2 }}
            >
              <Parallax
                speed={2}
                style={{
                  backgroundColor: "blue",
                  borderRadius: 100,
                  width: 100,
                  height: 100,
                  marginTop: "auto",
                  cursor: "grab",
                }}
              />
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                backgroundColor: "var(--light-red)",
                borderRadius: 300,
                width: 200,
                height: 200,
                justifyContent: "center",
                alignItems: "center",
                cursor: "grab",
                // translateY: `${this.state.yValue}px`,
              }}
              drag
              dragConstraints={{ top: 1, left: 1, right: 1, bottom: 1 }}
              whileHover={{ scale: 1.04, backgroundColor: "#6a99ff" }}
              whileTap={{
                scale: 0.8,
                color: "white",
              }}
              transition={{ duration: 1 }}
            >
              <p>Drag me around</p>
            </motion.div>

            <motion.div
              animate={{
                // scale: 0.8
                sclae: 1.2,
              }}
              whileTap={{
                scale: 0.8,
              }}
              transition={{ type: "spring", damping: 1, stiffness: 100 }}
            >
              <Parallax
                speed={1}
                style={{
                  display: "flex",
                  backgroundColor: "red",
                  borderRadius: 100,
                  width: 80,
                  height: 80,
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "grab",
                }}
              >
                <p style={{ color: "white" }}>Tap</p>
              </Parallax>
            </motion.div>
          </div>
        </section>

        <section className="responsive">
          <img
            src="https://i.ibb.co/rfCmw6J/website-responsive-mockup-template-high-res-08.jpg"
            alt=""
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: 200,
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            <h1 style={{ fontSize: 60 }}>Responsive</h1>
            <p style={{ fontSize: 20 }}>
              My layouts will work on any device, big or small.
            </p>
          </div>
        </section>

        <section className="fast-load">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              height: 200,
              flexWrap: "wrap",
              flex: 1,
            }}
          >
            <h1 style={{ fontSize: 60 }}>Fast</h1>
            <p style={{ fontSize: 20 }}>
              Fast load times and lag free interaction, my highest priority.
            </p>
          </div>

          <img src="https://i.ibb.co/z4mpmJy/fast-website.png" alt="" />
        </section>

        <section
          style={{
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "blueviolet",
            borderBottomRightRadius: 20,
          }}
        ></section>
      </>
    );
  }
}
