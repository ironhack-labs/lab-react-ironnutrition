import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import "./Input.css"

export default class Input extends Component {
  constructor() {
    super()


  }
  render() {
    return (
     <input className="input" type={this.props.type} placeholder={this.props.placeholder}></input>
    )
  }
}
