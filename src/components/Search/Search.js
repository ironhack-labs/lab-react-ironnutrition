import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <input
          placeholder="Search bar"
          type="text"
          value={this.props.search}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
