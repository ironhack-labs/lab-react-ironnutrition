import React, { Component } from "react";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import Search from "./components/Search";
import TodayFood from "./components/TodayFood";

class App extends Component {
  state = {
    foodList: foods,
    filteredList: foods,
    showForm: false,
  };

  addFood = (newFood) => {
    const foodsCopy = [...this.state.foodList];
    foodsCopy.unshift(newFood);
    this.setState({
      foodList: foodsCopy,
    });
  };

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  searchFood = (input) => {
    const searchedFood = this.state.foodList.filter((oneFood) =>
      oneFood.name.toLowerCase().includes(input)
    );
    this.setState({ filteredList: searchedFood });
  };

  addToTodaysFood = (name, quantity) => {
    this.state.foodList.forEach( food => {
      if (food.name === name) {
        // quantity > 0 means the food has been selected for TodayFood
        food.quantity += parseInt(quantity, 10)
      }
    })
    this.setState({
      foodList: [...this.state.foodList]
    })
  } 

  deleteFromTodaysFood = (name) => {
    this.state.foodList.forEach(food => {
      if (food.name === name) {
        // quantity = 0 means the food will not show in TodayFood
        food.quantity = 0;
      }
    })
    this.setState({
      foodList: [...this.state.foodList]
    })
  }

  render() {
    // Condition for the food to show in TodayFood
    const todayFood = foods.filter(food => food.quantity > 0)

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>

          <Search searchFood={this.searchFood} />

          <button className="button" onClick={this.toggleForm}>Add Food</button>

          {this.state.showForm ? <AddFood addFood={this.addFood} /> : null}

          <div className="columns">
            <div className="column">
              {this.state.filteredList.map((food, index) => (
                <FoodBox key={index} food={food} addToTodaysFood={this.addToTodaysFood} />
              ))}
            </div>

            <div className="column">
              <TodayFood todayFood={todayFood} deleteFromTodaysFood={this.deleteFromTodaysFood}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
