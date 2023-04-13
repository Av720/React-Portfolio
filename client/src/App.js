import React from "react";
import NavBar from './components/Navbar/Navbar';
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"
import '../src/App.css'




function App() {
    return (
        <div>
            <NavBar />
            <About />
            <Portfolio/>
            <Footer />
            
            {/* <Main />
            <Contact /> */}
        </div>
    );
}

export default App;