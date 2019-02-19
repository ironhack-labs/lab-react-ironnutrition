import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super(); //this runs React Component's constructor

    this.state = {
      query: ""
    };
  }

  handleChange = event => {
    event.preventDefault();
    let query = event.target.value;
    this.props.searchFood(query);
  };

  render() {
    // console.log(this.state);

    return (
      <div className="field">
        <input
          onChange={this.handleChange}
          type="text"
          className="input search-bar"
          name="query"
          placeholder="Search"
          value={this.state.name}
        />
      </div>
    );
  }
}

export default Search;
