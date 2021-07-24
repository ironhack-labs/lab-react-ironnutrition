import React, { Component } from 'react';

class Search extends Component {
  state = {
    input: '',
  };

  handleSearch = async (event) => {
    await this.setState({
      input: event.target.value,
    });
    this.props.filterFood(this.state.input)
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search..."
          onChange={this.handleSearch}
          value={this.state.input}
        />
      </div>
    );
  }
}

export default Search;
