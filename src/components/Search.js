import React, { Component } from 'react';

//It performs a search that updates the list.

class Search extends Component {
  state = {
    search: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
    // invocar la función creada en FoodList.js que filtra la lista de comidas según la búsqueda
    this.props.searchFoods(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value={this.state.search}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
