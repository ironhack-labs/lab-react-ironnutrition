  
import React, { Component } from 'react';

class Todays extends Component {
  render() {
    return (
            <h5 class="subtitle is-5">Today's list</h5>
            <p>{this.props.foodItem}</p>
    )
  }
}

export default Todays;