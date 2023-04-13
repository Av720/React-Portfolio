import React from "react";
import "../About/about.css";
import selfie from "../../assets/profile.png";
import Tilt from "react-parallax-tilt";


function About() {
  return (
    <div className="about-me" id="about">
      <div className="d-flex">
        <div className="flex-fill">
          <h1 className="about-header"> About me</h1>
          <p className="about-text">
            I have served in the US Marine Corps for 14 years. Aviation
                      Logistician by trade. <br />
                      <br />
            Since I was a kid, I loved anything that relates to building such as
            PC building and computer programming.
                      <br />
                      <br />
                      
            I recently completed an accelerated fullstack web development course
                      that took 3 months to complete. <br /> <br />I have learned and excelled in
            JavaScript, NodeJS, MongoDB, React, GraphQl, MySQL.
          </p>
        </div>

              <div className="profile-pic flex-fill">
                  <Tilt className="tilt-img"
                      tiltMaxAngleX={35}
                      tiltMaxAngleY={35}
                      perspective={900}
                      scale={1.1}
                      transitionSpeed={2000}
                      gyroscope={true}>
          <img className="selfie" src={selfie} alt="selfie"></img>
                  </Tilt>
              </div>
      </div>
    </div>
  );
}

export default About;
