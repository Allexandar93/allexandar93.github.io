import React from "react";
import Info from "./Info";
import "../styles/portfolio.scss";
import Contact from "./Contact";
import Projects from "./Projects";
import Socials from "./Socials";
import Sidebar from "./Sidebar";
import Resume from "./Resume";

function Portfolio() {
  return (
    <div className="portfolio">
      <Sidebar />
      <Info />
      <Projects />
      <Resume />
      <Contact />
      <Socials />
    </div>
  );
}

export default Portfolio;
