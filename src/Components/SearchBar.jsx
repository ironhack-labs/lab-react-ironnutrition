import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            className="searchBar"
            type="text"
            placeholder="Search.."
            value=""
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
