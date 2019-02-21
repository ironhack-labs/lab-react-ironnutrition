import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import AddFood from "./components/AddFood.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleForm: false,
      foodArray: foods
    };
  }

  toggleForm() {
    const oldFilter = this.state.showForm;
    this.setState({ showForm: !oldFilter });
  }

  addNewFood(foodObject) {
    const foods = this.state.foodArray;
    foods.unshift(foodObject);
    this.setState({ foodArray: foods });
  }

  deleteFood(foodIndex) {
    const foods = this.state.foodArray;
    foods.splice(foodIndex, 1);
    this.setState({ foodArray: foods });
  }

  render() {
    const { foodArray, showForm } = this.state;
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <button className="button-form" onClick={() => this.toggleForm()}>
          Add Food{" "}
        </button>
        {showForm ? (
          <AddFood foodSubmit={foodObject => this.addNewFood(foodObject)} />
        ) : null}
        {foodArray.map((oneFood, index) => {
          return (
            <div>
              <FoodBox
                name={oneFood.name}
                image={oneFood.image}
                calories={oneFood.calories}
                quantity={oneFood.quantity}
              />
              <button
                className="delete-button"
                onClick={() => this.deleteContact(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
        ;
      </div>
    );
  }
}

export default App;
