import React, { Component } from 'react';

class ButtonFood extends Component{
  render(){
    return <button onClick={this.props.onClick}>{this.props.children}</button>
  }
}

export default ButtonFood;