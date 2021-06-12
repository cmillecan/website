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
  margin: 5px 0 0;

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
        </div>
        <div className="about-box">
          <div className="about-left">
            <img
              className="about-pic"
              src="https://i.imgur.com/DOrIxZr.jpg"
              alt="fitapp"
            />
            <div className="social">
              <a
                href="https://www.linkedin.com/in/constance-m-8672151a1/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"/>
              </a>
              <a
                href="http://github.com/cmillecan"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-alt"/>
              </a>
            </div>
          </div>
          <div className="about-right">
            <p className="about">
              I'm a <strong>software engineer</strong> and{" "}
              <strong>musician</strong> passionate about creativity. I enjoy
              full-stack development and am especially enthusiastic about
              front-end development. As a software engineer, I'm always focused
              on how code feels, looks, and functions but am also
              detail-oriented about visual elements. I have enjoyed working on
              full-stack projects and learning how the front-end and back-end
              communicate with each other. What excites me the most about
              software engineering is that learning is never-ending and the
              small challenges that I continuously overcome motivate my curious
              mind to keep going.
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
