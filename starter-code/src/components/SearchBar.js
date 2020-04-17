import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    const { inputValue, inputOnChange} = this.props;
    return (
      <div>
        <div>
          <label htmlFor="filter">Search: </label>
          <input type="text" id="filter" 
          value={inputValue} 
          onChange={inputOnChange}
          placeholder="Filter by word"/>
        </div>
      </div>
      
    )
  }
}

export default SearchBar;