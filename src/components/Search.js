import React, { Component } from 'react';
import 'bulma/css/bulma.css';

class Search extends Component {
  render() {
    return (
      <div>
        <textarea
          onChange={this.props.onSearch}
          label="Search"
          className="textarea"
          placeholder="Search for a food"
        ></textarea>
      </div>
    );
  }
}

export default Search;
