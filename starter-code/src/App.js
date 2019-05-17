import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import Meal from "./components/Meal";

class App extends Component {
  state = {
    totalCalories: 0,
    search: "",
    meals: []
  };

  handleChange = e => {
    let { search } = this.state;
    search = e.target.value;
    this.setState({ search });
    console.log(search);
  };

  handleAdd = (id, name, qty, cals) => {
    const quantity = Number.parseInt(qty, 10);
    let { meals, totalCalories } = this.state;
    const meal = {
      id,
      name,
      quantity,
      calories: cals
    };
    meals.push(meal);
    totalCalories = meals.reduce(
      (acc, meal) => (acc += meal.calories * meal.quantity),
      0
    );
    this.setState({ meals, totalCalories });
  };

  handleDelete = id => {
    let { meals } = this.state;
    meals.forEach((meal, index) => {
      if (meal.id === id) meals.splice(index, 1);
    });
    this.setState({ meals });
  };

  render() {
    const { totalCalories, meals } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="title has-text-left marginBottom">IronNutrition</h1>
          <div>
            <input
              onChange={this.handleChange}
              className="input search-bar marginBottom"
              type="text"
            />
          </div>
          <div className="columns">
            <div className="column">
              {foods
                .filter(meal => {
                  const { search } = this.state;
                  if (search.length === 0) return true;
                  else
                    return meal.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                })
                .map((food, index) => (
                  <FoodBox
                    key={index}
                    id={index}
                    {...food}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                  />
                ))}
            </div>
            <div className="column content has-text-left">
              <h2 className="title has-text-left">Today's foods</h2>
              <ul>
                {meals.map((meal, index) => (
                  <Meal
                    key={index}
                    {...meal}
                    handleDelete={this.handleDelete}
                  />
                ))}
              </ul>
              <div className="has-text-left">
                <strong>Total:{totalCalories} calories</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
