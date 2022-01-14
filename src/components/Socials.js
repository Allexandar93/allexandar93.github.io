import React from "react";
import "../styles/socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Socials() {
  return (
    <div className="socials">
      <a target="_blank" href="https://www.facebook.com/aleksandar.atza/">
        <FontAwesomeIcon className="social" icon={faFacebookSquare} />
      </a>

      <a target="_blank" href="https://www.instagram.com/alleksandarzivotic/">
        <FontAwesomeIcon className="social" icon={faInstagram} />
      </a>

      <a target="_blank" href="https://github.com/Allexandar93">
        <FontAwesomeIcon className="social" icon={faGithub} />
      </a>
    </div>
  );
}

export default Socials;
