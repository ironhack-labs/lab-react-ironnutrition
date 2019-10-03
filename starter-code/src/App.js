import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import FoodForm from "./FoodForm";
import Search from "./Search";
import SummaryFood from "./SummaryFood";

class App extends Component {
  constructor() {
    super();

    this.state = {
      food: foods,
      searchedFood: foods,
      foodSummary: [],
      showForm: false
    };
  }

  addFood() {
    this.setState({
      ...this.state,
      showForm: !this.state.showForm
    });
  }

  updateState(newFood) {
    let newState = { ...this.state };
    newState.food.unshift(newFood);

    this.setState(newState);
    this.addFood();
  }

  searchHanlder(searchTerm) {
    let newState = { ...this.state };
    const searchedTerm = {
      searchedFood: newState.food.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    };

    this.setState(searchedTerm);
  }

  addFoodToSummaryHandler(newFoodInSummary) {
    let newState = { ...this.state };

    const newInSummary = newState.foodSummary.push({
      qty: +newFoodInSummary.qty,
      name: newFoodInSummary.name,
      totalCalories: +newFoodInSummary.calories * newFoodInSummary.qty
    });

    console.log(newInSummary);

    this.setState(newState);
  }

  removeFood(idx) {
    let removedFoodFromSummary = [ ...this.state.foodSummary ]
    removedFoodFromSummary.splice(idx, 1)

    this.setState({
      ...this.state,
      foodSummary: removedFoodFromSummary
    })
  }

  render() {

    console.log("STATE IS", this.state);

    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>

        <Search searchResult={search => this.searchHanlder(search)} />

        <button className="button btn" onClick={() => this.addFood()}>
          Add new food
        </button>

        {this.state.showForm && (
          <FoodForm sendStateFromApp={state => this.updateState(state)} />
        )}

        <div className="columns">
          <div className="column">
            {this.state.searchedFood.map((food, idx) => {
              return <FoodBox key={idx} {...food} updateSummary={state => this.addFoodToSummaryHandler(state)} />;
            })}
          </div>

          <SummaryFood
            
            totalCalories={this.state.foodSummary.reduce((a, b) => a + b.totalCalories, 0)}
          >
            {this.state.foodSummary.map((food, idx) => {
              return (
                <li key={idx}>
                  {food.qty} x {food.name}{" "} {food.calories}
                  <button onClick={() => this.removeFood(idx)}>X</button>
                </li>
              );
            })}
          </SummaryFood>
        </div>
      </div>
    );
  }
}

export default App;
