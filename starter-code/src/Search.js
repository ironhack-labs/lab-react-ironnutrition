import React, { Component } from "react";

export default class Search extends Component {

  searchFood(e) {
    console.log(e.target.value);
    this.props.searchResult(e.target.value)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onKeyUp={(e) => this.searchFood(e)}
        />
      </div>
    );
  }
}
