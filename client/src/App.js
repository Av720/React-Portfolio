import React, { useState } from "react";
import Header from './Header';
import '../src/css/App.css'




function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <div className="App">
            <Header />
            <main>
                <div className={isDarkMode ? "dark-mode" : "light-mode"}>
                    <h1>My App</h1>
                    <button onClick={handleDarkModeToggle}>
                        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    </button>
                </div>
      
            </main>
        </div>
    );
}

export default App;

