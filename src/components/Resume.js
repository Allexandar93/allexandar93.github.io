import React from "react";
import CV from "../images/CV.jpg";
import "../styles/resume.scss";

function Resume() {
  return (
    <div id="resume" className="resume">
      <p className="resumeText">
        Click on the image below to download my resume
      </p>
      <a
        href="https://drive.google.com/uc?export=download&id=15-HYkHiS9JElr7b4uZXmmjWg_bkh-_cj"
        target="_blank"
      >
        <img className="resumeImg" src={CV} />
      </a>
    </div>
  );
}

export default Resume;
