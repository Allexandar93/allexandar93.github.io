import React from "react";
import "../styles/projectCards.scss";

function ProjectCards({ img, link, title, codeLink }) {
  return (
    <div className="mainProjectCards">
      <div className="projectCards">
        <div className="browser">
          <div className="browserCircle redC"></div>
          <div className="browserCircle yellowC"></div>
          <div className="browserCircle greenC"></div>
        </div>
        <a className="links" href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="projectImg" />
        </a>
        <p>{title}</p>
      </div>
      <div className="projectButtons">
        <a className="projectButtonsBtn" href={link} target="_blank">
          Go to Demo
        </a>
        <a className="projectButtonsBtn" href={codeLink} target="_blank">
          Go to Code
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
