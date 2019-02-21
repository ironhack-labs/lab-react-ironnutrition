import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox";
import foods from "./foods.json";
import AddFood from "./AddFood";
import Search from "./Search";

class App extends Component {
  constructor() {
    super();

    this.state = {
      foods: foods,
      isHidden: true
    };
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  addFoodHandler = food => {
    const newFoodList = [...this.state.foods];
    newFoodList.unshift(food);
    this.setState({
      foods: newFoodList
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <button
          className="button is-primary is-small"
          onClick={this.toggleHidden.bind(this)}
        >
          Add Food
        </button>
        {!this.state.isHidden && <AddFood addTheFood={this.addFoodHandler} />}
        <Search />
        <div className="container">
          <ul>
            {this.state.foods.map((food, i) => (
              <FoodBox key={i} food={food} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
