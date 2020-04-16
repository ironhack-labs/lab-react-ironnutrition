import React, { Component } from "react";
import foods from "../foods.json";
import Ejemplo1 from "./Ejemplo1";
class Search extends Component {
  render() {






    return (
      <div>

        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onChange={this.props.onChange}
          value={this.props.value}
        ></input>
      </div>
    );
  }
}

export default Search;
