import React, { Component } from "react";

export default class SearchFood extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    let { value } = e.target;

    this.props.filterFood(value);

    this.setState({ query: value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Search</label>
          <input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
