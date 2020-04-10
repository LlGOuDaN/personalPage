import React from 'react';

import NavigationBar from '@Components/NavigationBar';
import AboutTitle from '@Components/AboutTitle';

type IMainProps = {};

export default function Main(props: IMainProps) {
  return (
    <div className="main-container">
      <NavigationBar />
      <section className="main-container__top-section">
        <div className="top-section__intro">
          <h5>Hi, I&apos;m</h5>
          <h2>
            <span className="theme-green">Y</span>ifei{' '}
            <span className="theme-green">L</span>i
          </h2>
          <p className="theme-green">SWE & Front-End Developer</p>
          <div className="bottom">
            About Me
            <span className="about-icon">&#x269B;</span>
          </div>
        </div>
      </section>
      <section className="main-container__about" id="about">
        <AboutTitle />
      </section>
    </div>
  );
}
