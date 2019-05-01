import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <input className="input" type="text" placeholder="Search..." onChange={(e) => this.props.search(e.target.value)}/>
      </React.Fragment>
    )
  }
}
