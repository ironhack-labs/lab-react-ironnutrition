import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox.js";
import AddFood from "./components/AddFood.js";
import Search from "./components/Search.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      everyFood: foods,
      showForm: false
    };
  }

  displayForm() {
    const state = this.state.showForm;

    this.setState({ showForm: !state });
  }

  addNewFood(foodInfo) {
    const allTheFoods = this.state.everyFood;

    allTheFoods.unshift(foodInfo);

    this.setState({ everyFood: allTheFoods, showForm: false });
  }

  showFilteredFoods(foodsToDisplay) {
    this.setState({ everyFood: foodsToDisplay });
  }

  render() {
    const { everyFood, showForm } = this.state;
    return (
      <div className="App">
        <Search
          allFoods={everyFood}
          foodsToDisplay={event => this.showFilteredFoods(event)}
        />
        {showForm ? (
          <AddFood addFood={foodObject => this.addNewFood(foodObject)} />
        ) : (
          <button onClick={() => this.displayForm()}>Add New Food</button>
        )}

        {everyFood.map(oneFood => {
          return (
            <FoodBox
              key={oneFood.name}
              name={oneFood.name}
              calories={oneFood.calories}
              image={oneFood.image}
              quantity={oneFood.quantity}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
