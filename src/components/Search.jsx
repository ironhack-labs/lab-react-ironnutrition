import React, { Component } from 'react';

export class Search extends Component {
  render() {
    return (
      <div>
        <label htmlFor="search">Search</label>
        <input
          onChange={this.props.handleSearchFromParent}
          name="search"
          type="search"
        />
      </div>
    );
  }
}

export default Search;
