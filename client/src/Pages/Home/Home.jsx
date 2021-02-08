import React, { Component } from "react";
// import { motion } from "framer-motion";
import styled from "styled-components";
import "./style.css";
import { device } from "../../assets/media";

const HomeContainer = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;
  background: linear-gradient(#383838, #000000c5),
    url("https://i.ibb.co/PjY1kBf/kevin.jpg") no-repeat center fixed;
  background-size: cover;
  flex-direction: row;
  align-items: center;
  cursor: grab;

  @media ${device.mobileL} {
    width: 100vw;
  }
`;

const Text = styled.p`
  color: white;
  font-size: 60px;
  font-weight: 900px;
`;

const ContactBtn = styled.p`
  color: #7259ff;
  padding: 10px;
  border: 1px solid #7259ff;
  margin-right: auto;
  margin-top: 10px;
  font-weight: bold;
`;

const IntroText = styled.div`
  margin-left: 55px;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  @media ${device.mobile} {
    margin: 20px;
    > ${Text} {
      font-size: 50px;
      font-weight: 900px;
    }
  }
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.mobile} {
    display: none;
  }
`;
export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <IntroText>
          <Text>Hi,</Text>

          <Text>I'm Kwamina,</Text>

          <Text>Web Developer.</Text>

          <ContactBtn>Contact me!</ContactBtn>
        </IntroText>

        <Image src={require("../../assets/img/app.jpg")} alt="" />
      </HomeContainer>
    );
  }
}
