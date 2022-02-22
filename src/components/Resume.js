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
        href="https://drive.google.com/uc?export=download&id=1D_f3D4z3Tk6yltMR1UH6xX2nn5e2-GIg"
        target="_blank"
      >
        <img className="resumeImg" src={CV} />
      </a>
    </div>
  );
}

export default Resume;
