import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
      image: "",
      name: "",
      calories: 0,
    };
  
    handleSearch = (event) => {
      const value = event.target.value; 
      this.props.doSearch(value);
    };
  
    render() {
      return (
        <input onChange={this.handleSearch}></input>
      );
    }
  }
  
  export default SearchBar;