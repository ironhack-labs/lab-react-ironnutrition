import React from "react";

const navbar = () => {
  return(
      <nav className="navbar"  aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://www.ironhack.com/">
            <img src="../ironLogo.jpg" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" style={{ height: "250px"}} />
          </a>
          <a className="navbar-item">
            <h1>IronNutrition</h1>
          </a>
        </div>
      </nav>
  )
}

export default navbar