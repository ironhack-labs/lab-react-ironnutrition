import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <div className="control">
          <input
            onChange={this.props.onSearch}
            className="input"
            type="text"
            placeholder="Fodd Search =>"
            name="search"
          ></input>
        </div>
      </div>
    );
  }
}

export default Search;
