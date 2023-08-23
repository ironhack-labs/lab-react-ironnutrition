import React, { Component } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Button, Empty } from "antd"; // Import the Empty component
import foodsJson from "../foods.json";

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foodsJson,
      filteredFoods: foodsJson,
      isFormVisible: false,
    };
  }

  deleteFood = (foodId) => {
    const updatedFoods = this.state.foods.filter((food) => food.id !== foodId);
    this.setState({
      foods: updatedFoods,
      filteredFoods: updatedFoods,
    });
  };

  handleSearch = (searchTerm) => {
    const filteredFoods = this.state.foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredFoods });
  };

  addFood = (newFood) => {
    this.setState((prevState) => ({
      foods: [...prevState.foods, newFood],
      filteredFoods: [...prevState.foods, newFood],
    }));
  };

  toggleFormVisibility = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible,
    }));
  };

  render() {
    return (
      <div>
        {/* Render the Search component */}
        <Search onSearch={this.handleSearch} />

        {/* Toggle button to show/hide the form */}
        <Button onClick={this.toggleFormVisibility}>
          {this.state.isFormVisible ? "Hide Form" : "Add New Food"}
        </Button>

        {/* Render the AddFoodForm component conditionally */}
        {this.state.isFormVisible && (
          <AddFoodForm onAddFood={this.addFood} />
        )}

        {/* Display feedback message when the list is empty */}
        {this.state.filteredFoods.length === 0 && (
          <Empty description="Oops! There is no more content to show." />
        )}

        {/* Map over the filteredFoods instead of foods */}
        {this.state.filteredFoods.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={() => this.deleteFood(food.id)} />
        ))}
      </div>
    );
  }
}

export default FoodList;
