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

const ContactBtn = styled.a`
  color: #7259ff;
  padding: 10px;
  border: 1px solid #7259ff;
  margin-right: auto;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
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
  width: 550px;
  height: 550px;
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

          <ContactBtn href="/contact">Contact me!</ContactBtn>
        </IntroText>
        <Image src="https://i.ibb.co/pXV0dy5/stan-wall.png" alt="kkd" />
      </HomeContainer>
    );
  }
}
