import React, { Component } from 'react';

class Button extends Component {

 
  

  render(){
    return(
      <div>
        <button onClick={this.props.onClick}>Add</button>
      </div>
    )
  }
}



export default Button;