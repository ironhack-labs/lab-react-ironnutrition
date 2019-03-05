import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  handleChange = e => {
    this.setState({
      searchString: e.target.value
    });
    this.props.setFilteredFoods(
      this.props.foods.filter(food => {
        return food.name.toUpperCase().includes(e.target.value.toUpperCase());
      })
    );
  };

  render() {
    return (
      <div>
        <label for="search">Search: </label>
        <input
          type="text"
          value={this.searchString}
          id="search"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
