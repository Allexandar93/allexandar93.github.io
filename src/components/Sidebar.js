import React, { useState } from "react";
import "../styles/sidebar.scss";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";

function Sidebar({ sidebar, openMenu }) {
  return (
    <div onClick={openMenu} className={sidebar ? "sidebar active" : "sidebar"}>
      <FontAwesomeIcon
        className="sidebarIcon"
        icon={sidebar ? faTimes : faEllipsisV}
      />

      <div className="menuList">
        <ul>
          <li>
            <HashLink className="link" smooth to="#info">
              Home
            </HashLink>
          </li>

          <li>
            <HashLink className="link" smooth to="#projects">
              Projects
            </HashLink>
          </li>

          <li>
            <HashLink className="link" smooth to="#resume">
              Resume
            </HashLink>
          </li>

          <li>
            <HashLink className="link" smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
