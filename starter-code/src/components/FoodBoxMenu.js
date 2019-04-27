import React, { Component } from 'react';

class FoodBoxMenu extends Component {



  render(){



    return (
<div>

<li>{this.props.qtt} {this.props.name} - {this.props.calories} cal</li>

    </div>
    )
  }
}

export default FoodBoxMenu;