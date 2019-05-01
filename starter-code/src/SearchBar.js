import React, { Component } from 'react'

export default class SearchBar extends Component {

  render() {
    return (
      <React.Fragment>
          <input className="search"
            type="text" 
            name="name" 
            onChange={(e) => this.props.search(e.target.value)}/>
      </React.Fragment>
    )
  }
}
