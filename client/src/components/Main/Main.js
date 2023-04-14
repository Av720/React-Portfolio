import React from "react";
import "../../components/Main/main.css";
import coding from "../../assets/coding.jpg";
import Type from "./Type";

function Main() {
  return (
    <div className="" id="main">
    
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
    </div>
  );
}

export default Main;
