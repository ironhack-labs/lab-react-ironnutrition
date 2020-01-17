import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input className='input' onChange={this.props.updateSearch}></input>
      </form>
    )
  }
}

export default SearchBar