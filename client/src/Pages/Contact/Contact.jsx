import React, { Component } from "react";
// import Parallax from "react-rellax";
import styled from "styled-components";
import { IoIosPaperPlane, IoIosDoneAll } from "react-icons/io";
import "./style.css";

const ContactContainer = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #383838;
  flex-direction: column;
  padding-top: 55px;
  width: 100%;
`;

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
      <ContactContainer>
        <section
          style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}
        >
          <h1 style={{ color: "white", fontSize: 45 }}>Contact me</h1>

          <p style={{ color: "grey" }}>
            I'm interested in freelance opportunities - especially ambitious and
            large projects. However if you have other request or question, dont
            hesitate to contact me.
          </p>
        </section>

        <section className="main-contents">
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
                  value={this.state.name}
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
                  value={this.state.email}
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
                  value={this.state.message}
                  onChange={this.handleInput}
                ></textarea>
                {this.state.message.length >= 60 ? (
                  <IoIosDoneAll size={25} color="green" />
                ) : null}
              </section>

              <button
                className="send-btn"
                type="submit"
                onClick={() => this.resetForm()}
              >
                <IoIosPaperPlane size={25} color="white" />
              </button>
            </form>
          </div>

          {this.state.showBar ? (
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
          ) : null}
        </section>
      </ContactContainer>
    );
  }
}
