import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood";
import Search from "./Search";

class App extends Component {
  state = {
    // foods: [{name:'hamburger'}, {name:'pizza'},{name:'cake'} ]
    foods: foods,
    filteredFoods: foods
  };
  showMeAllTheFoods = () => {
    return this.state.filteredFoods.map(eachFood => {
      return <FoodBox food={eachFood} />;
    });
  };

  addAFood = e => {
    e.preventDefault();

    let food = {
      name: this.state.food,
      calories: this.state.calories,
      image: this.state.image
    };
    console.log("food", food);

    let newFoods = [...this.state.filteredFoods]; //make a copy of previous food
    newFoods.push(food); //push a new food into the copy
    this.setState({
      filteredFoods: newFoods //change the old food for the new food
    });
  };
  setFoodAndDetails = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  filterFoods = e => {
    let filter = this.state.foods.filter(item => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      filteredFoods: filter
    });
  };

  render() {
    return (
      <div className="App">
        {/* <h6>{this.state.food}</h6> */}
        <Search filter={this.filterFoods} />
        <AddFood
          setFoodAndDetails={this.setFoodAndDetails}
          addAFood={this.addAFood}
        />

        {this.showMeAllTheFoods()}
      </div>
    );
  }
}

export default App;
