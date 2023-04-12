import React, { useState } from "react";
import "../src/css/App.css";

function Theme() {

  const [DarkMode, setDarkMode] = useState(false);

  const toggle = () => {
    setDarkMode(!DarkMode);
  };
  return (

      <div className={DarkMode ? "dark-mode" : "light-mode"}>
        <h1>My App</h1>
        <button onClick={toggle}>
          {DarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

  );
};

export default Theme;
