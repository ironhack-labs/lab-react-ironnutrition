import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-item">
        Home
      </NavLink>
      <div className="navbar-item">
        <NavLink to="/add" className="nav-link">
          Add food
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
