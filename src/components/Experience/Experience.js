import React from "react";
import "../Experience/experience.css";
import css from "../../assets/languages/css.png";
import express from "../../assets/languages/express.png";
import html from "../../assets/languages/html.png";
import mysql from "../../assets/languages/mysql.png";
import node from "../../assets/languages/node.png";
import react from "../../assets/languages/react.png";
import javascript from "../../assets/languages/javascript.png";
import mongodb from "../../assets/languages/mongodb.png";

function Experience() {
  return (
    <div className="experience" id="experience">
      <div className="main-header">
        <h1 className="header-text"> EXPERIENCE</h1>
      </div>

      <p className="experience-txt">
        These are the technologies I've leveraged in my projects.
      </p>

      <div className="first-exp-row d-flex">
        <div className="languages justify-content-center">
          <img className="lang-logo html" src={html} alt="html"></img>
          <p className="lang-text">HTML</p>
        </div>

        <div className="languages justify-content-center">
          <img className="lang-logo css" src={css} alt="html"></img>
          <p className="lang-text">CSS</p>
        </div>

        <div className="languages justify-content-center">
          <img className="lang-logo js" src={javascript} alt="html"></img>
          <p className="lang-text">JavaScript</p>
        </div>
        <div className="languages justify-content-center">
          <img className="lang-logo react" src={react} alt="html"></img>
          <p className="lang-text">React</p>
        </div>
        {/* first row end */}
      </div>
      <div className="second-exp-row d-flex">
        <div className="languages justify-content-center">
          <img className="lang-logo express" src={express} alt="html"></img>
          <p className="lang-text">Express</p>
        </div>

        <div className="languages justify-content-center">
          <img className="lang-logo node" src={node} alt="html"></img>
          <p className="lang-text">NodeJS</p>
        </div>

        <div className="languages justify-content-center">
          <img className="lang-logo mongo" src={mongodb} alt="html"></img>
          <p className="lang-text">MongoDB</p>
        </div>
        <div className="languages justify-content-center">
          <img className="lang-logo mysql" src={mysql} alt="html"></img>
          <p className="lang-text">MySQL</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
