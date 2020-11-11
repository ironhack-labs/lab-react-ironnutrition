import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { filterFoods } = this.props;

    this.setState({ [name]: value });
      filterFoods(value);
  }

  render() {
    return (
      <input type="text" name="search" placeholder="Search foods by name" value={this.state.search} onChange={this.handleChange} />
    );
  }
}

export default Search; 