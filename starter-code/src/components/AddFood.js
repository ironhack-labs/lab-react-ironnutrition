import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json'

class AddFood extends Component
{
  // constructor(props) {
  //   super(props);
  //     this.state = {
  //       name: " ",
  //       calories: " ",
  //       image: " ",
  //       quantity: " "
  //   }
  // }
    
  addQuantity = (e) => {
    return (
      <div className="todays-foods">
        <b>Today's foods</b>
        <p>Total: 0 Calories</p>
      </div>
    )
  }

  render()
  {
    return (
      <div>
        {this.addQuantity()}
      </div>
    )
  }
}

export default AddFood;
