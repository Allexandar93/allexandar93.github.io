import React from "react";
import "../styles/info.scss";
import Body from "../images/body.png";
import Head from "../images/head.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div id="info" className="info">
      <div className="info__imgContainer">
        <img className="body" src={Body} />
        <img className="head" src={Head} alt="" />
      </div>
      <div className="info__text">
        <h2>Hi, I'm Aleksandar. Nice to meet you.</h2>
        <p>
          I'm beginning my journey as a front-end developer and would like to
          work with you. Front-end development is a newly discovered passion of
          mine, and I work almost daily on expanding knowledge and experience.
          I'm quietly confident and naturally curious. Here you'll find my
          projects and work that shows you what I can do. 
        </p>
      </div>
      <FontAwesomeIcon className="arrow" icon={faArrowDown} />
    </div>
  );
}

export default Info;
