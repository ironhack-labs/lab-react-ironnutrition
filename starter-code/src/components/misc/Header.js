import React from 'react';

const Header = () => (
  <nav className="navbar is-info is-fluid" aria-label="main navigation">
  <div className="navbar-brand ">
    <a className="navbar-item" href="https://github.com/ironhack-labs/lab-react-ironnutrition">
      <img src="https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png" alt="Lab IronNutrition" width="40" height="40"/>
      IRON NUTRITION
    </a>

    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
);

export default Header