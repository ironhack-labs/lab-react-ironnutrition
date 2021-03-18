import React, { Component } from 'react';

class Search extends Component {
  handleInput = (event) => {
    this.setState({ search: event.target.value });
    this.props.search(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleInput}
        />
      </div>
    );
  }
}

export default Search;
