import React, { Component } from "react";
import Parallax from "react-rellax";
import { IoIosPaperPlane, IoIosDoneAll } from "react-icons/io";
import "./style.css";
import ClearSpace from "../../Components/clearSpace";

export default class Contact extends Component {
  state = {
    showBar: false,
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Send Message",
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, ":", value);
    this.setState({ [name]: value });
  };

  submitEmail = (e) => {
    e.preventDefault();

    this.setState({
      buttonText: "...sending",
    });

    // let data = {
    //   name: this.state.name,
    //   email: this.state.email,
    //   message: this.state.message,
    // };

    if (this.state.name !== "") {
      console.log("name field is correct perform other tasks");
      if (this.state.email !== "") {
        console.log("email field is also correct perform other tasks");
        if (this.state.message !== "") {
          console.log("message field is also correct perform other tasks");
          this.setState({ showBar: true });
          // logic goes here
          // axios
          //   .post("API_URI", data)
          //   .then((res) => {
          //     this.setState({ sent: true }, this.resetForm());
          //   })
          //   .catch(() => {
          //     console.log("Message not sent");
          //   });
        } else {
          console.log("message field empty");
        }
      } else {
        console.log("email field empty");
      }
    } else {
      console.log("name field empty");
    }
  };

  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  render() {
    return (
      <div className="contact-container">
        <ClearSpace />

        <section className="main-contents">
          <Parallax speed={-2}>
            <div className="form-container">
              <p
                style={{
                  fontSize: 40,
                  marginBottom: 3,
                  marginTop: 3,
                  fontWeight: "bold",
                }}
              >
                Get in touch
              </p>
              <form
                action="."
                method="POST"
                className="form-style"
                onSubmit={this.submitEmail}
              >
                <section
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={this.handleInput}
                  />
                  {this.state.name.length >= 3 ? (
                    <IoIosDoneAll size={25} color="green" />
                  ) : null}
                </section>

                <section
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleInput}
                  />
                  {this.state.email.length >= 11 ? (
                    <IoIosDoneAll size={25} color="green" />
                  ) : null}
                </section>
                <section
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <textarea
                    name="message"
                    id="message"
                    rows="8"
                    placeholder="Message..."
                    onChange={this.handleInput}
                  ></textarea>
                  {this.state.message.length >= 60 ? (
                    <IoIosDoneAll size={25} color="green" />
                  ) : null}
                </section>

                <button className="send-btn" type="submit">
                  <IoIosPaperPlane size={25} color="white" />
                </button>
              </form>
            </div>
          </Parallax>

          {this.state.showBar ? (
            <Parallax speed={2.5}>
              <div className="thanks-container">
                <p
                  style={{
                    color: "white",
                    fontSize: 70,
                    fontWeight: "bold",
                    paddingBottom: 20,
                  }}
                >
                  Thank You.
                </p>
                <hr />
                <p
                  style={{
                    color: "white",
                    fontSize: 23,
                    paddingTop: 20,
                  }}
                >
                  I'll be in touch.
                </p>
              </div>
            </Parallax>
          ) : null}
        </section>
      </div>
    );
  }
}
