import React, { useState } from "react";
import Info from "./Info";
import "../styles/portfolio.scss";
import Contact from "./Contact";
import Projects from "./Projects";
import Socials from "./Socials";
import Sidebar from "./Sidebar";
import Resume from "./Resume";

function Portfolio() {
  const [sidebar, setSidebar] = useState(false);

  const openMenu = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="portfolio">
      <Sidebar sidebar={sidebar} openMenu={openMenu} />
      <Info />
      <Projects />
      <Resume />
      <Contact />
      <Socials />
    </div>
  );
}

export default Portfolio;
