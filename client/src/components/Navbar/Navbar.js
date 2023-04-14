
// import { Link } from "react-scroll";
import '../Navbar/navbar.css'
import '../Navbar/header.css'
import 'animate.css';





function NavBar() {
  
  return (

    <div>
      <section>
 
      <div className="header">
        <h1 className="my-name">Aldo Valencia</h1>
        <div>
            <ul>
              <li>
                <a className="nav-text" href="#main">Home</a>
              </li>
            <li>
              <a className="nav-text" href="#about">About Me</a>
            </li>
          <li>
              <a className="nav-text" href="#portfolio"> Portfolio</a>
              </li>
              <li>
                <a className="nav-text" href="#experience">Experience</a>
              </li>
              <li>
                <a className="nav-text" href="#footer">Contact Me</a>
              </li>
              
          </ul>
        </div>
        </div>

      </section>
    </div>
  )
};

export default NavBar;
