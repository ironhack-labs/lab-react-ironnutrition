import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search for a food in our DB" />
      </form>
    )
  }
}

export default SearchBar
