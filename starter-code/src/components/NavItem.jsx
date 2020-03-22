import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "./SearchBox";

const NavItem = ({ setSearchFilter, searchFilter }) => {
  return (
    <div class="field is-grouped">
      <p class="control">
        <Link to="/" class="button is-info">
          Home
        </Link>
      </p>
      <SearchBox {...{ setSearchFilter, searchFilter }} />
      <p class="control">
        <Link to="/new" class="button is-info">
          Add Food
        </Link>
      </p>
    </div>
  );
};

export default NavItem;
