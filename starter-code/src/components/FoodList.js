import React, { Component } from "react";
import foods from "../foods.json";
import FoodCard from "./FoodCard";
import AddFood from './addFood';
import SearchFood from './searchFood'
class Food extends Component {
  constructor() {
    super();
    this.state = {
      addedFood: false,
      foods: foods
    };
  }
    addNewFood = food => {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(food)
        this.setState({ foods: foodsCopy })
    }
  showForm = () => {
    const { show } = this.state.addedFood;
    this.setState({ addedFood: !show });
  };
    closeForm = () => {
        this.setState({ addedFood: false });
    }
  render() {
    return (
      <div>
        <button className="button is-info" onClick={this.showForm}>
          Add Food
        </button>
        <SearchFood />
            {this.state.addedFood && <AddFood closeForm={this.closeForm} includeFood={this.addNewFood}/>}
        {this.state.foods.map((food, idx) => (
          <FoodCard key={idx} {...food} />
        ))}
      </div>
    );
  }
}
export default Food;
