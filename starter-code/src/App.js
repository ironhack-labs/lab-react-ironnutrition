import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddForm from "./components/AddForm";
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super(); //this runs React Component's constructor
    this.state = {
      foods: foods,
      filtered: foods,
      formIsHidden: true
    };
  }

  toggleForm = () => {
    if (!this.state.formIsHidden) {
      this.setState({
        formIsHidden: true
      });
    } else {
      this.setState({
        formIsHidden: false
      });
    }
  };

  addFoodHandler = foodObj => {
    this.setState({
      foods: this.state.foods.concat([foodObj]),
      filtered: this.state.filtered.concat([foodObj]),
      formIsHidden: true
    });
  };

  searchFoodHandler = query => {
    let filteredFood = this.state.foods.filter(food => {
      const foodLowerCase = food.name.toLowerCase();
      const filter = query;
      return foodLowerCase.includes(filter);
    });
    this.setState({ filtered: filteredFood });
  };

  render() {
    return (
      <div className="App" id="root">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <button onClick={this.toggleForm} className="button is-success">
            Add new food
          </button>
          {!this.state.formIsHidden && (
            <AddForm addTheFood={this.addFoodHandler} />
          )}
          <Search searchFood={this.searchFoodHandler} />
          {this.state.filtered.map((food, index) => {
            return (
              <FoodBox
                key={index}
                img={food.image}
                name={food.name}
                calories={food.calories}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
