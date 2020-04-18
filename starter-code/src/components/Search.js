import React, { Component } from "react";

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
