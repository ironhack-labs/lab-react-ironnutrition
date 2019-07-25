import React, { Component } from 'react';

class SearchBar extends Component {

  render() {
    
    return(
      <input type="text" name="search" onChange={(ev) => this.props.searchTheFood(ev)} />
    )
  }
}

export default SearchBar;