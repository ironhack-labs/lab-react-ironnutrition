import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {

  render() {
    return (
      <form className='searchBar'>
        <input type="search" name="search" id="search" placeholder='Search food' onChange={e => this.props.updateSearch(e)} />
      </form>
    )
  }
}
