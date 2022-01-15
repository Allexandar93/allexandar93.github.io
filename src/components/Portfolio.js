import React, { useState } from "react";
import Info from "./Info";
import "../styles/portfolio.scss";
import Contact from "./Contact";
import Projects from "./Projects";
import Socials from "./Socials";

function Portfolio() {
  return (
    <div className="portfolio">
      <Info />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}

export default Portfolio;
