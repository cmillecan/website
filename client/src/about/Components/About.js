import React from "react";
import "./About.css";
import styled from "styled-components";

const ResumeButton = styled.a`
  font-size: 14px;
  color: var(--black);
  background: transparent;
  border: 1px solid var(--blue);
  cursor: pointer;
  font-family: "Lato", sans-serif;
  font-weight: lighter;
  letter-spacing: 0.03em;
  text-transform: none;
  padding: 10px;
  margin: 10px 0 0;

  &:hover {
    color: white;
    background: var(--blue);
    transition: 0.2s;
    border: 1px solid var(--blue);
  }
`;

const About = () => {
  return (
    <div className="about-container">
      <div className="about-div">
        <div className="welcome-message">
          <h6>Hi, I'm Connie</h6>
          <div className="social">
            <a href="https://www.linkedin.com/in/constance-m-8672151a1/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="http://github.com/cmillecan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-alt"></i>
            </a>
          </div>
        </div>
        <div className="about-box">
          <div className="about-left">
            <img
              className="about-pic"
              src="https://i.imgur.com/DOrIxZr.jpg"
              alt="fitapp"
            />
          </div>
          <div className="about-right">
            <p className="about">
              I am a <strong>software engineer</strong> and{" "}
              <strong>musician</strong> passionate about creativity. Originally
              I had studied music in college, but recently I pursued and
              finished an education in computer science. I had my first
              experience with web design over 15 years ago when I was building
              my own website as a hobby. I loved spending hours designing and
              making improvements, and even ended up making a little money from
              it. My interest in software never went away, as I've continued to
              have the desire to learn more. Although my professional background
              has been in music so far, I am currently very excited to focus on
              my software career.
            </p>
          </div>
        </div>
        <div className="resume-button">
          <ResumeButton
            href="https://drive.google.com/file/d/1RaDKBMccKxTWRQHP9OKRgTHAp0CgtBVl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </ResumeButton>
        </div>
      </div>
    </div>
  );
};

export default About;
