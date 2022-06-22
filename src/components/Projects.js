import React from "react";
import "../styles/projects.scss";
import ProjectCards from "./ProjectCards";
import { projects } from "./data.js";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects__text">
        <h1>Here are some of my projects</h1>
      </div>
      <div className="projects__list">
        {projects.slice(0, 6).map((item) => (
          <ProjectCards
            key={item.id}
            title={item.title}
            img={item.img}
            link={item.link}
            codeLink={item.codeLink}
          />
        ))}
      </div>

      <Link className="projectsBtn" to={"/projects"}>
        See all of my projects
      </Link>
    </div>
  );
}

export default Projects;
