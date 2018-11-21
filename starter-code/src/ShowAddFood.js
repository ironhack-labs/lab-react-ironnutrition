import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

class ShowAddFood extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.onClick}>Add new Food</button>
      </div>
    )
  }
}

export default ShowAddFood;