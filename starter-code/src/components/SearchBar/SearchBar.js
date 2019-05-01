import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" onChange={e => this.props.info(e.target.value)}/>
      </div>
    )
  }
}
