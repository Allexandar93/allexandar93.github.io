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
        <img className="body" src={Body} alt="" />
        <img className="head" src={Head} alt="" />
      </div>
      <div className="info__text">
        <h2>Hi, I'm Aleksandar. Nice to meet you.</h2>
        <p>
          Self-driven Front End Developer with a passion for both personal
          growth and web development. Mostly focused on ReactJS, I attended
          1000+ hours of coding bootcamps to learn new languages while
          sharpening existing skills. Ready to apply my passion for coding to a
          talented engineering team to develop quality solutions. Feel free to
          contact me through the contact form at the end of the page.
        </p>
      </div>
      <FontAwesomeIcon className="arrow" icon={faArrowDown} />
    </div>
  );
}

export default Info;
