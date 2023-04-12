import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import '../styles/App.css'

function NavBar ()  {
  return (
    <div>
      <div className="header">
        <h1 className="my-name">Aldo Valencia</h1>
        <div>
          <ul>
            <li>
              <a className="nav-text" href="#about.me">About Me</a>
            </li>
            <li>
              <a className="nav-text" href="#main-projects">Projects</a>
            </li>
            <li>
              <a className="nav-text" href="#footer">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default NavBar;
