import React, { Component } from "react";

import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox.js";
import FormAddFood from "./FormAddFood.js";
import foods from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods,
      showForm: false
    };
  }

  addOneFood(oneFood) {
    const foodArray = this.state.foods;

    //update the array (unshift = push an item at the top of the arry)
    foodArray.unshift(oneFood);

    // save the new array in the state to render the component again
    this.setState({ foods: foodArray });
  }

  toggleForm() {
    console.log("clockcck");

    const { showForm } = this.state;
    this.setState({ showForm: !showForm });
  }

  render() {
    const foodArray = this.state.foods;
    const { showForm } = this.state;
    return (
      <div className="App">
        <header className="App-header" />
        <h2>IronNutrition</h2>
        <button className="button is-success" onClick={() => this.toggleForm()}>
          Add new food
        </button>
        {showForm ? (
          <FormAddFood
            foodSubmit={oneFood => this.addOneFood(oneFood)}
            showForm={() => this.toggleForm()}
          />
        ) : null}
        {foodArray.map((element, index) => {
          return <FoodBox key={index} food={element} />;
        })}
        ;
      </div>
    );
  }
}

export default App;
