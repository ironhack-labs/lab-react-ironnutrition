import React, { Component } from 'react'

export default class Button extends Component {

  render() {

  let clase="button "+this.props.clase;

    if (this.props.hasOwnProperty("id")) {
      return (
        
        <button className={clase} onClick={e=>this.props.callbackFunction(e)} id={this.props.id}>{this.props.children}</button>

      )
    } else {
      console.log(this.props.callbackFunction)

      return (

        <button className={clase} onClick={e=>this.props.callbackFunction(e)}>{this.props.children}</button>

      )
    }
  } 
}
