import React, { Component } from "react";

class Search extends Component {
  state = { search: "" };
  search = e => {
    this.state.value = e.target.value;
    this.props.searchedString(this.state.value.toLowerCase());
  };
  render() {
    return (
      <div>
        <input
          type='text'
          id=''
          value={this.state.value}
          placeholder='Search for food..'
          onChange={this.search}
        />
      </div>
    );
  }
}

export default Search;
