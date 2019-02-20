import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import FoodForm from "./components/FoodForm.js";
import Search from "./components/Search.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodArray: foods,
      showForm: false
    };
  }

  addNewFood(foodObject) {
    const allFood = this.state.foodArray;
    allFood.unshift(foodObject);
    this.setState({ foodArray: allFood });
  }

  toggleForm() {
    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  }

  render() {
    const { showForm, foodArray } = this.state;

    return (
      <div className="App">
        <h2>IronNutrition</h2>
        <Search />
        <button onClick={() => this.toggleForm()}>Show Form</button>
        {showForm ? (
          <FoodForm foodSubmit={foodObject => this.addNewFood(foodObject)} />
        ) : null}

        {foodArray.map((oneFood, index) => {
          return (
            <div key={index}>
              <FoodBox
                name={oneFood.name}
                image={oneFood.image}
                calories={oneFood.calories}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
