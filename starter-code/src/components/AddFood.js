import React, { Component } from 'react'

export default class AddFood extends Component {
  render() {
    return (
      <form onSubmit={this.addNew}>
        <input type="text" onChange={this.handleName}></input>
      </form>
    )
  }
}
