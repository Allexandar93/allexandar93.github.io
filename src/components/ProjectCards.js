import React from "react";
import "../styles/projectCards.scss";

function ProjectCards({ img, link }) {
  return (
    <div className="projectCards">
      <div className="browser">
        <div className="browserCircle redC"></div>
        <div className="browserCircle yellowC"></div>
        <div className="browserCircle greenC"></div>
      </div>
      <a className="links" href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="projectImg" />
      </a>
    </div>
  );
}

export default ProjectCards;
