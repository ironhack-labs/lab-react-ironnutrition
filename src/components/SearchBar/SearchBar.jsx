import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {


  searchFood = (event) => {
    console.log('entro1');

    this.props.onSearch(
      event.target.value
    );
  };

  render() {
    return (
      <input
        onChange={this.searchFood}
        type="text"
        placeholder="Search food"
      ></input>
    );
  }
}

export default SearchBar;
