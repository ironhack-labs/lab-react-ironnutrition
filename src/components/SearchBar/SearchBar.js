import React, { Component } from 'react';

class SearchBar extends Component {

  render () {
    return (
      <form>
        <input 
          className="input is-medium is-rounded m-5" 
          value={this.props.textToSearch} 
          onChange={this.props.handleSearch}>     
        </input>
      </form>
    )
  }
}

export default SearchBar