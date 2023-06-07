import React from "react";
import NavBar from './components/Navbar/Navbar';
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
// import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
import '../src/App.css'




function App() {
    return (
        <div>
            <NavBar />
            <Main />
            <About />
            <Portfolio/>
            <Experience />
            {/* <Contact />  */}
            <Footer />
        </div>
    );
}

export default App;