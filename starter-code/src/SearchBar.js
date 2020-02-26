import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchName: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }),
      () => {
        this.props.newSearch(this.state.searchName);
      };
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="searchName"
          value={this.state.searchName}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
