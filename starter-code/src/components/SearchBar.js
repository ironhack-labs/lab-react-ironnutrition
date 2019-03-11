import React, { Component } from 'react'

class SearchBar extends Component {


  render() {
    return (
      <div>
        <label htmlFor="search">Search: </label>
        <input name="search" type="text" onChange={this.props.handleChange} />
      </div>
    )
  }
}

export default SearchBar