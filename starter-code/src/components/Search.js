import React, { Component } from 'react'

export class Search extends Component {
  render() {
    return (
      <div>
         <input type="text" className="input search-bar" name="search" placeholder="Search..." onChange={this.handleChange} />
      </div>
    )
  }
}

export default Search;
