import React from "react";
import "../About/about.css";
import selfie from "../../assets/profile.png";
import Tilt from "react-parallax-tilt";
import resume from '../../assets/resume.pdf'


function About() {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <div className="about-me" id="about">
 
      <div className="d-flex">
        <div className="flex-fill">
          <h1 className="about-header"> About me</h1>
          <p className="about-text">
            I have served in the US Marine Corps for 14 years <br />
            as an Aviation Logistics Specialist. 
            <br />
            <br />
            Since I was a kid, I had a passion for anything that relates
            <br /> to computers/programming and designing. 
            
            <br />
            <br />
                      
            I have completed an accelerated fullstack Web development course through Denver University.
                 <br /> <br />I have learned and excelled in
            JavaScript, NodeJS, MongoDB, React, GraphQl, MySQL.
          </p>

          <button className="resume-btn" onClick={handleDownloadResume}>Download Resume</button>
        </div>

              <div className="profile-pic flex-fill">
                  <Tilt className="tilt-img"
                      tiltMaxAngleX={20}
                      tiltMaxAngleY={20}
            perspective={800}
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
