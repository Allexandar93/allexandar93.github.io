import React, { useState } from "react";
import Info from "./Info";
import "../styles/portfolio.scss";
import Contact from "./Contact";
import Projects from "./Projects";
import Socials from "./Socials";
import Sidebar from "./Sidebar";

function Portfolio() {
  const [sidebar, setSidebar] = useState(false);

  const openMenu = () => {
    setSidebar(!sidebar);
  };

  const close = () => {
    if (setSidebar(!sidebar)) {
      setSidebar(false);
    }
  };
  return (
    <div onClick={close} className="portfolio">
      <Sidebar sidebar={sidebar} openMenu={openMenu} />
      <Info />
      <Projects />
      <Contact />
      <Socials />
    </div>
  );
}

export default Portfolio;
