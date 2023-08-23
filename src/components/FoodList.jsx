import React, { Component } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search"; // Import the Search component
import foodsJson from "../foods.json"; // Make sure to adjust the path accordingly

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foodsJson,
      filteredFoods: foodsJson, // Initialize filteredFoods with all foods initially
    };
  }

  // Add a method to handle food item deletion
  deleteFood = (foodId) => {
    const updatedFoods = this.state.foods.filter((food) => food.id !== foodId);
    this.setState({
      foods: updatedFoods,
      filteredFoods: updatedFoods, // Also update filteredFoods
    });
  };

  // Add a method to handle search
  handleSearch = (searchTerm) => {
    const filteredFoods = this.state.foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredFoods });
  };

  // Add a method to add new food item to the list
  addFood = (newFood) => {
    this.setState((prevState) => ({
      foods: [...prevState.foods, newFood],
      filteredFoods: [...prevState.foods, newFood], // Also update filteredFoods
    }));
  };

  render() {
    return (
      <div>
        {/* Render the Search component */}
        <Search onSearch={this.handleSearch} />

        {/* Render the AddFoodForm component */}
        <AddFoodForm onAddFood={this.addFood} />

        {/* Map over the filteredFoods instead of foods */}
        {this.state.filteredFoods.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={() => this.deleteFood(food.id)} />
        ))}
      </div>
    );
  }
}

export default FoodList;
