import React, { Component } from "react";
import { Search, FoodList, FoodForm } from "./components";
import foods from "./foods.json";
import "bulma/css/bulma.css";

class App extends Component {
  state = { foods, filteredFoods: foods, selectedFoods: [], formOpen: false };

  handleSearch = e => {
    const { foods } = this.state;
    const searchTerm = e.target.value;
    const filteredFoods = foods.filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    this.setState({ filteredFoods });
  };

  createFood = formData => {
    const { foods } = this.state;
    const newFoodList = [...foods, formData];
    this.setState(
      { foods: newFoodList, filteredFoods: newFoodList },
      this.toggleForm
    );
  };

  toggleForm = () =>
    this.setState(prevState => ({ formOpen: !prevState.formOpen }));

  handleQuantityChange = name => e => {
    if (e.target.value < 0) return;
    const { filteredFoods } = this.state;
    const selectedFood = filteredFoods.find(food => food.name === name);
    const newFilteredFoods = filteredFoods.map(food =>
      food.name === selectedFood.name
        ? { ...selectedFood, quantity: e.target.value }
        : food
    );
    this.setState({ filteredFoods: newFilteredFoods });
  };

  addTodayFood = name => () => {
    const { filteredFoods, selectedFoods } = this.state;
    const currentSelection = filteredFoods.find(food => food.name === name);
    const isDuplicate = selectedFoods.some(food => food.name === name);
    const newSelectedFoods = isDuplicate
      ? selectedFoods.map(food =>
          food.name === currentSelection.name ? currentSelection : food
        )
      : [...selectedFoods, currentSelection];
    this.setState({ selectedFoods: newSelectedFoods });
  };

  removeTodayFood = name => () => {
    const { selectedFoods } = this.state;
    const newSelectedFoods = selectedFoods.filter(food => food.name !== name);
    this.setState({ selectedFoods: newSelectedFoods });
  };

  render() {
    const { filteredFoods, selectedFoods, formOpen } = this.state;
    return (
      <div className="App">
        <h1>Food List</h1>
        <Search handleSearch={this.handleSearch} />
        <button onClick={this.toggleForm}>Add More</button>
        {formOpen && <FoodForm createFood={this.createFood} />}
        <FoodList
          addTodayFood={this.addTodayFood}
          handleQuantityChange={this.handleQuantityChange}
          foods={filteredFoods}
          selectedFoods={selectedFoods}
          removeTodayFood={this.removeTodayFood}
        />
      </div>
    );
  }
}

export default App;
