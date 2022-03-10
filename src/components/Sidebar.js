import React, { useState, useRef, useEffect } from "react";
import "../styles/sidebar.scss";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faTimes } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      setSidebar(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const openMenu = () => {
    setSidebar(!sidebar);
  };

  return (
    <div
      ref={ref}
      onClick={openMenu}
      className={sidebar ? "sidebar active" : "sidebar"}
    >
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
