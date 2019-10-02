import React, { Component } from 'react'
import 'bulma/css/bulma.css';

export default class Input extends Component {
  
  render() {
    return (
      <React.Fragment>
        <input id={this.props.id} type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value}/>
        </React.Fragment>
    )
  }
}
