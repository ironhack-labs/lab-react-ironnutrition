import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <input id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value}></input>
      </div>
    )
  }
}
