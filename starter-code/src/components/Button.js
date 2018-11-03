import React, { Component } from 'react';

class Button extends Component {

 
  

  render(){
    return(
      <div className="control">
        <button className="button is-success" onClick={this.props.onClick}>Add</button>
      </div>
    )
  }
}



export default Button;