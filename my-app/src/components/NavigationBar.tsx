import React from "react";
import styled from "styled-components";
import ShadowLogo from "./ShadowLogo";
type INavigationBarProps = {};

const Container = styled.div`
  width: calc(100% - 40px);
  display: flex;
  position: absolute;
  top: 22px;
  height: 90px;
  margin: 0 20px;
  font-family: "Josefin Sans", sans-serif;
  justify-content: space-between;
  .nav-anchors {
    margin: 10px 20px;
    display: flex;
  }
`;

const Anchor = styled.div`
  position: relative;
  color: white;
  font-weight: 600;
  font-size: 13px;
  margin: 0 30px;
  padding: 10px;
  height: 35px;
  &::after {
    display: block;
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 100%;
    content: "";
    border-bottom: 2px solid rgba(71, 207, 115, 0);
    transition: all 0.5s;
  }
  &.active::after,
  &:hover::after {
    bottom: 0;
    width: 100%;
    content: "";
    border-bottom: 2px solid rgba(71, 207, 115, 1);
    transition: all 0.5s;
  }
`;

export default (props: INavigationBarProps) => {
  return (
    <Container className="navigation-bar">
      <ShadowLogo
        className="resume-logo"
        text="Resume"
        color="white"
        href="/"
        fontSize={45}
      />
      <div className="nav-anchors">
        <Anchor className="active">
          <a href="/">HOME</a>
        </Anchor>
        <Anchor>
          <a href="#about">ABOUT</a>
        </Anchor>
        <Anchor>
          <a href="#skills">SKILLS</a>
        </Anchor>
        <Anchor>
          <a href="#projects">PROJECTS</a>
        </Anchor>
        <Anchor>
          <a href="#contact">CONTACT</a>
        </Anchor>
      </div>
    </Container>
  );
};
