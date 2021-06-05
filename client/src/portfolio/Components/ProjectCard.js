import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const { title, type, image, description, github, demo } = props;

  return (
    <div className="projects-display">
      <div className="complete-project">
        <div className="project-card">
          <div className="project-name">
            <h2>{title}</h2>
          </div>
          <div className="project-type">
            <h5>{type}</h5>
          </div>
          <div className="project-img">{image}</div>
          <div className="project-description">
            <p>{description}</p>
            <div className="project-links">
              <a href={github} target="_blank" rel="noreferrer">
                Github
              </a>
              {demo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
