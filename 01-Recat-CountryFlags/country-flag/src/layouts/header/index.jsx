import React from "react";

import "./index.scss";

const Header = () => {
  const handleDarkMode=()=>{
let element=document.body;
element.classList.toggle("dark-mode")
  }
  return (
    <div className="container">
      <div className="header">
        <div className="where-in-the-world">
          <h1>Where in the world?</h1>
        </div>
        <div className="dark-mode">
          <span className="btn-dark" onClick={(e)=>handleDarkMode(e)}>
            <i className="fa-regular fa-moon"></i>
            <h3>Dark Mode</h3>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
