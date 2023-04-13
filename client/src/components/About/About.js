import React from "react";
import "../About/about.css";
import coding from "../../assets/coding.jpg";
import Type from "./Type";

function About() {
  return (
    <div className="" id="about">
      <div className="d-flex">
        <div className=" introduction flex-fill">
          <img src={coding} className="coding-img" alt="coding" />
        </div>

        <div className="intro-text flex-fill">
          <h1 className="greeting">
            Hi I'm Aldo!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <p className="greeting-txt">
            <Type />
          </p>
        </div>
      </div>

      <div className="about-card">
        <h2>Interests</h2>
        <p>Building Keyboards</p>
        <p>Building Computers </p>
        <p>Hiking</p>
      </div>
      <img src="" alt=""></img>
    </div>
  );
}

export default About;
