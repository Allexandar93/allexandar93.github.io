import React from "react";
import CV from "../images/CV.jpg";
import "../styles/resume.scss";

function Resume() {
  return (
    <div id="resume" className="resume">
      <p className="resumeText">
        Click on the image to view and download my resume
      </p>
      <a
        href="https://drive.google.com/file/d/1n-qKBImBsJPHxo9F0SFRBJiijDllFsHp/view?usp=sharing"
        target="_blank"
      >
        <img className="resumeImg" src={CV} />
      </a>
    </div>
  );
}

export default Resume;
