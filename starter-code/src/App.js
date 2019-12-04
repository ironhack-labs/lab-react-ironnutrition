import React, { Component } from "react";
import "bulma/css/bulma.css";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox/FoodBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentFood: {
        name: "",
        image: "",
        calories: 0,
        quantity: 1
      },
      foods: foods,
      showForm: false
    };
  }

  displayForm(e) {
    e.preventDefault();
    let showForm = !this.state.showForm;
    this.setState({
      ...this.state,
      showForm: showForm
    });
  }

  updateFood(e, key) {
    let updatedFood = { ...this.state.currentFood };
    updatedFood[key] = e.target.value;
    console.log("Hola")
    this.setState({
      ...this.state,
      currentFood: updatedFood
    });
  }

  addFood(e) {
    e.preventDefault();
    let foodsUpdated = [this.state.foods];

    foodsUpdated.push({
      name: this.state.currentFood.name,
      image: this.state.currentFood.image,
      calories: this.state.currentFood.calories,
      quantity: this.state.currentFood.quantity
    });

    this.setState({
      ...this.state,
      foods: foodsUpdated,
      currentFood: {
        name: "",
        image: "",
        calories: 0,
        quantity: 1
      }
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="main-nav">
          <div>
            <input type="search" value="" placeholder="Search food! :)"></input>
            <button onClick={e => this.displayForm(e)}>Add new food!</button>
          </div>
          {this.state.showForm && (
            <form>
              <input
                onChange={e => this.updateFood(e, "name")}
                type="text"
                value={this.state.currentFood.name}
                placeholder="Food name"
              ></input>
              <input
                onChange={e => this.updateFood(e, "image")}
                type="text"
                value={this.state.currentFood.image}
                placeholder="Paste the img URL"
              ></input>
              <input
                onChange={e => this.updateFood(e, "calories")}
                type="number"
                value={this.state.currentFood.calories}
                placeholder="Food calories"
              ></input>
              <button onClick={e => this.addFood(e)}>ADD!</button>
            </form>
          )}
        </nav>
        {this.state.foods.map((food, idx) => (
          <FoodBox key={idx} food={food} />
        ))}
      </div>
    );
  }
}

export default App;
