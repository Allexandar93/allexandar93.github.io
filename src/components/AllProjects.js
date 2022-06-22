import React from "react";
import ProjectCards from "./ProjectCards";
import { Link } from "react-router-dom";
import { projects } from "./data";
import ScrollToTop from "./ScrollToTop";
import "../styles/allProjects.scss";

const AllProjects = () => {
  return (
    <div className="allProjects">
      <ScrollToTop>
        <Link className="goBack" to={"/portfolio"}>
          {"<"} Go Back
        </Link>
        <div className="projects__list">
          {projects.map((item) => (
            <ProjectCards
              key={item.id}
              title={item.title}
              img={item.img}
              link={item.link}
              codeLink={item.codeLink}
            />
          ))}
        </div>
      </ScrollToTop>
    </div>
  );
};

export default AllProjects;
