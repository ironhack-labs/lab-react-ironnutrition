import React, { Component } from "react";
import mongoose from "mongoose";
import "bulma/css/bulma.css";
import foods from "../foods.json";

import FoodBox from "./FoodBox";
import AddFood from "./AddFood";

export default class DynamicFoodList extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      addFoodFormActive: false,
      searchInput: ''
    };
  }

  toggleFoodForm = () => {
    this.setState({ addFoodFormActive: !this.state.addFoodFormActive });
  };

  addFoodHandler = theFood => {
    theFood._id = new mongoose.Types.ObjectId();
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy
    });
  };

  handleSearch = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const searchInput = this.state.searchInput.toLowerCase();
    const foods = this.state.foods;
    const filteredFoods = foods.filter(food => 
      food.name.toLowerCase().includes(searchInput)
    );

    return (
      <div>
        <button onClick={this.toggleFoodForm}>Add new Food</button>
        {this.state.addFoodFormActive === true && (
          <AddFood addTheFood={this.addFoodHandler} toggleForm={this.toggleFoodForm} />
        )}

        <div>
          <input
            type="search" onChange={this.handleSearch} value={this.state.searchInput}
          ></input>
        </div>

        {filteredFoods.map((food, index) => {
          return <FoodBox key={index} {...food} />;
        })}
      </div>
    );
  }
}
