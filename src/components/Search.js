import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  render() {
    return (
      <div className="Search">
        <input placeholder="Search..."
          onChange={(event) => this.props.filterFoods(event)}
          type="text"
          placeholder="Search..."
        />
      </div>
    );
  }
}
