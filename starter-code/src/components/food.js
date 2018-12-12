import React, { Component } from 'react';
import foods from '../foods.json'
import Foodbox from './foodbox'

class Food extends Component {
  state={
    foodList : foods
  }
  render() {
    const {foodList}=this.state
    return (
      <div className="container">
      {foodList.map(foodList=><Foodbox key ={foodList.name}{...foodList}/> )}
      </div>
    );
  }
}

export default Food;


