import React from 'react';
//no necesitamos metere las llaves y el return porque devuelve directamente el return, esto se hace solo si no hay nada mas declarado dentro que el return del render
const Header = () => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item has-text-weight-bold" href="https://bulma.io">
        Iron Nutrition
      </a>
    </div>
  </nav>
);

export default Header;