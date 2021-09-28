import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .title {
    font-family: "Montserrat", sans-serif;
    position: relative;
    display: inline-block;
    font-size: 2em;
    font-weight: 700;

    &--number {
      width: 100px;
      font-size: 15px;
      position: absolute;
      top: -70%;
      left: -15%;
      border-radius: 20px;
      border-left: 2px solid #47cf73;
      border-bottom: 2px solid #47cf73;
      padding: 5px 0 5px 9px;
      box-shadow: -3px 2px 3px #b9b9b9;
    }
  }
`;
export default function AboutTitle() {
  return (
    <Container>
      <div className="title">
        <span className="title--number">01</span>
        ABOUT ME
      </div>
      <div className="green-text">
        Hi, This is Yifei. A Boring Guy on Earth.
      </div>
      <div className="description">
        I&apos;m a Computer Science student at Rose-Hulman Institute of
        Technology, graduating in May, 2020. Currently seeking for a full-time
        position in US.
      </div>
    </Container>
  );
}
