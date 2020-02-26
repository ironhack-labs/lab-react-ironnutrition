import React, { Component } from "react";
import "bulma/css/bulma.css";

class Search extends Component {

  render() {
    return (
      <div>
        <input
          type="search"
          onChange={e => this.props.searchFood(e)}
          placeholder="Search food"
        />
      </div>
    );
  }
}

export default Search;
