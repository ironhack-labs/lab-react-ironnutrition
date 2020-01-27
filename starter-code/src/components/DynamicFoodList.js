import React, { Component } from "react";
import mongoose from "mongoose";
import "bulma/css/bulma.css";
import foods from '../foods.json';

import FoodBox from "./FoodBox";
import AddFood from './AddFood';

export default class DynamicFoodList extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      addFoodFormActive: false
    }
  }

  toggleFoodForm = () => {
    this.setState({ addFoodFormActive: !this.state.addFoodFormActive })
  }


  addFoodHandler = (theFood) => {
    theFood._id = new mongoose.Types.ObjectId();
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    })
  }

  render() {

    const foodFormActive = this.addFoodFormActive
    
    //console.log(foods[0]);
    return (
      <div>
      <button onClick={this.toggleFoodForm}>Add new Food</button>
      { this.state.addFoodFormActive === true && <AddFood addTheFood={this.addFoodHandler} /> }
        
     
      {this.state.foods.map(onefood => {
        return <FoodBox key={foods.indexOf(onefood)} {...onefood} />
      })
      }
      </div>
    );
  }
}
