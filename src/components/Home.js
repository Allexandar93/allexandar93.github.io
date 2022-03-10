import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__text">
        <div className="home__textLeft">
          <h3>Hi, I'm</h3>
        </div>

        <div className="home__textRight">
          <h1>ALEKSANDAR</h1>
          <h1>ŽIVOTIĆ</h1>
        </div>
      </div>
      <p>Freelance Front-end developer</p>
      <Link className="home__btn" to={"/portfolio"}>
        Let's get started
      </Link>

      <div className="home__animation">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Home;
