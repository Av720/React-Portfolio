import React from "react";
import "../Portfolio/portfolio.css";
import mercury from "../../assets/mercury.png";
import notetaker from "../../assets/notetaker.png";
import passwordgen from "../../assets/passwordgen.png";
import travelbuddy from "../../assets/travelbuddy.png";
import weatherdash from "../../assets/weatherdash.png";
import codequiz from "../../assets/codequiz.png";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="port-header">MY PORTFOLIO</h1>

      <div className="cards">

        <div className="first-row d-flex justify-content-evenly">
          <div className="card" id="card">
            <img src={mercury} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mercury POS</h5>
              <p className="card-text">
                A complete Pont Of Sale Application for any restaurant owners.
              </p>
              <a
                href="https://mercury-pos.herokuapp.com/"
                className="btn btn-primary"
              >
                Go to Site
              </a>
            </div>
          </div>

          <div className="card">
            <img src={travelbuddy} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Travel Buddy</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://hollyhleal.github.io/travel-buddy/"
                className="btn btn-primary"
              >
                Go to Site
              </a>
            </div>
          </div>

          <div className="card ">
            <img src={notetaker} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://fast-cove-47826.herokuapp.com/"
                className="btn btn-primary"
              >
                Go to Site
              </a>
            </div>
          </div>
        </div>
        {/* closing of first row */}

        <div className="second-row d-flex justify-content-evenly">
          
          <div className="card">
            <img src={passwordgen} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://av720.github.io/Password-Generator/"
                className="btn btn-primary"
              >
                Go to Site
              </a>
            </div>
          </div>

          <div className="card">
            <img src={weatherdash} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://av720.github.io/Weather-Dashboard/"
                className="btn btn-primary"
              >
                Go to Site
              </a>
            </div>
          </div>

          <div className="card">
            <img src={codequiz} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">JS Code Quiz </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a
                href="https://av720.github.io/Code-Quiz/"
                className="btn btn-primary"
              >
                Go to Site
              </a>
            </div>
          </div>
        </div>
        {/* closing of second row */}
      </div>
    </div>
  );
}

export default Portfolio;
