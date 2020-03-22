import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavBar = () => {
  return (
    <div className="field is-grouped">
      <p className="control">
        <Link to="/" className="button is-info">
          Home
        </Link>
      </p>
      <SearchBox />
      <p className="control">
        <Link to="/new" className="button is-info">
          Add Food
        </Link>
      </p>
    </div>
  );
};

export default NavBar;
