import React, { Component } from 'react';


class SearchBar extends Component {

  render() {
    const { inputValue, inputOnChange} = this.props;
    return (
      <div>
        <div className="search-bar-box">
          <label className="search-input" htmlFor="filter">Search</label>
          <input class="input is-info" type="text" id="filter" 
          value={inputValue} 
          onChange={inputOnChange}
          placeholder="Filter by words"/>
        </div>
      </div>
      
    )
  }
}

export default SearchBar;