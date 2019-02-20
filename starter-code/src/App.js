import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox.js";
import AddFood from "./AddFood";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myFoods: foods,
      displayAddFood: false
    };
    console.log(this.state.myFoods);
  }
  addNewFood(foodObject) {
    // get th eold array from the state
    const foods = this.state.myFoods;
    // update the array
    foods.unshift(foodObject);
    // save the new array in the state to render the component again
    this.setState({ myFoods: foods });
    this.toggleAddFood();
  }

  toggleAddFood() {
    const oldFilter = this.state.displayAddFood;
    this.setState({ displayAddFood: !oldFilter });
  }
  render() {
    const { myFoods } = this.state;

    const allBoxes = myFoods.map(oneFood => {
      console.log(oneFood.name);
      return (
        <FoodBox
          name={oneFood.name}
          calories={oneFood.calories}
          image={oneFood.image}
          quantity={oneFood.quantity}
        />
      );
    });

    return (
      <div className="App">
        <button
          onClick={() => {
            this.toggleAddFood();
          }}
        >
          Add a new food
        </button>
        {this.state.displayAddFood && (
          <AddFood
            foodSubmit={foodObject => {
              this.addNewFood(foodObject);
            }}
          />
        )}
        {allBoxes}
      </div>
    );
  }
}

export default App;
