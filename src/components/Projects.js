import React from "react";
import "../styles/projects.scss";
import ProjectCards from "./ProjectCards";
import { projects } from "./data.js";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects__text">
        <h1>Here are some of my projects</h1>
      </div>
      <div className="projects__list">
        {projects.map((item) => (
          <ProjectCards
            key={item.id}
            title={item.title}
            img={item.img}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
