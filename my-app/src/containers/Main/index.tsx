import React from "react";

import NavigationBar from "@Components/NavigationBar";

type IMainProps = {};

export default (props: IMainProps) => {
  return (
    <div className="main-container">
      <NavigationBar />
      <section className="main-container__top-section">
        <div className="top-section__intro">
          <h5>Hi, I'm</h5>
          <h2>
            <span className="theme-green">Y</span>ifei{" "}
            <span className="theme-green">L</span>i
          </h2>
          <p className="theme-green">SWE & Front-End Developer</p>
          <div className="bottom">
            About Me
            <span className="about-icon">&#x269B;</span>
          </div>
        </div>
      </section>
    </div>
  );
};
