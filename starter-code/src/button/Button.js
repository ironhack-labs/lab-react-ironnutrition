import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (

      <button style={{ display: this.props.displayed }} onClick={this.props.evento}>{this.props.name}</button>

    )
  }
}