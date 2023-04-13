import React from "react";
import "../Portfolio/portfolio.css";
import mercury from '../../assets/mercury.png'
import notetaker from '../../assets/notetaker.png'
import passwordgen from '../../assets/passwordgen.png'
import travelbuddy from '../../assets/travelbuddy.png'
import weatherdash from '../../assets/weatherdash.png'
import codequiz from '../../assets/codequiz.png'




function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1 className="port-header">MY PORTFOLIO</h1>

      <div className="cards">
              <div className="first-row d-flex justify-content-evenly">
          <div className="card">
            <img src={mercury} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mercury POS</h5>
              <p className="card-text">
                A complete Pont Of Sale Application for any restaurant owners.
              </p>
                          <a href="https://mercury-pos.herokuapp.com/" className="btn btn-primary">
                Go to Site 
              </a>
            </div>
          </div>

          <div className="card">
            <img src={travelbuddy} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                              Go to Site 
              </a>
            </div>
          </div>

          <div className="card">
            <img src={notetaker} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                              Go to Site 
              </a>
            </div>
          </div>
        </div>
        {/* closing of first row */}

              <div className="second-row d-flex justify-content-evenly">
          <div className="card">
            <img src={passwordgen} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                              Go to Site 
              </a>
            </div>
          </div>

          <div className="card">
            <img src={weatherdash} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                              Go to Site 
              </a>
            </div>
          </div>

          <div className="card">
            <img src={codequiz} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
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
