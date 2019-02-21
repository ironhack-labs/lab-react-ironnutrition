import React, { Component } from "react";
import "./Search.css";
import foods from "../foods.json";

function searchBar(requete) {
  return foods.filter(function(el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) > -1;
  });
}

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="SearchBar">
        <label>
          Search
          {searchBar(
            <input type="search" name="requete" placeholder="Search" />
          )}
        </label>
        <button>Search</button>
      </section>
    );
  }
}

export default SearchBar;
