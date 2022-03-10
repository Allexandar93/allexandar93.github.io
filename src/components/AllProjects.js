import React from "react";
import { allProjects } from "./AllProjectsData";
import ProjectCards from "./ProjectCards";
import { Link } from "react-router-dom";
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
          {allProjects.map((item) => (
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
