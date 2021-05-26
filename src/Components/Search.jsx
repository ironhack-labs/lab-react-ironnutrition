import React, { Component } from "react";

class Search extends Component {
  handleChange = (event) => {
    this.props.callbackFn(event.target.value);
  };

  render() {
    return (
      <input
        name="search"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search for a food"
      />
    );
  }
}

export default Search;