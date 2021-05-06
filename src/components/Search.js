import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <h3>Search</h3>
        <input
          onChange={(event) => this.props.filterFoods(event)}
          type="text"
          placeholder="Search..."
        />
      </div>
    );
  }
}
