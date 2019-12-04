import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox/FoodBox";

class App extends Component {
  constructor() {
    super();

    this.foodsClone = [...foods];

    this.state = {
      currentFood: {
        name: "",
        calories: 0,
        image: ""
      },

      form: false,

      displayFoods: this.foodsClone,
      permanentFoods: this.foodsClone
    };
  }

  addFood(e) {
    e.preventDefault();

    let foodsUpdate = [...this.state.displayFoods];
    let foodsUpdate2 = [...this.state.permanentFoods];

    foodsUpdate.push({
      name: this.state.currentFood.name,
      calories: this.state.currentFood.calories,
      image: this.state.currentFood.image,
      quantity: 0
    });

    foodsUpdate2.push({
      name: this.state.currentFood.name,
      calories: this.state.currentFood.calories,
      image: this.state.currentFood.image,
      quantity: 0
    });

    this.setState({
      ...this.state,

      currentFood: {
        name: "",
        calories: 0,
        image: ""
      },

      form: false,

      displayFoods: foodsUpdate,
      permanentFoods: foodsUpdate2
    });

    return;
  }

  showForm() {
    this.setState({
      ...this.state,
      form: true
    });
  }

  updateFood(e, key) {
    // console.log(e.target);
    let foodsUpdated = { ...this.state };
    foodsUpdated.currentFood[key] = e.target.value;
    this.setState(foodsUpdated);
  }

  searchFood(e, key) {
    let choosenFood = [...this.state.permanentFoods];
    let newFoods = choosenFood.filter((element, idx) => {
      return element.name.includes(e.target.value);
    });

    this.setState({
      ...this.state,
      displayFoods: newFoods
    });
    // choosenFood.currentFood[key] = e.target.value;
    // console.log(e.target.value);
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          name="name"
          placeholder="Search food"
          onChange={e => this.searchFood(e, "name")}
        />
        {this.state.displayFoods.map((element, idx) => {
          return (
            <FoodBox
              key={idx}
              image={element.image}
              name={element.name}
              calories={element.calories}
            ></FoodBox>
          );
        })}
        <button onClick={() => this.showForm()}>Add new Food</button>
        {this.state.form && (
          <form>
            <input
              type="text"
              name="name"
              placeholder="food name"
              onChange={e => this.updateFood(e, "name")}
              value={this.state.currentFood.name}
            />
            <input
              type="text"
              name="calories"
              placeholder="food calories"
              onChange={e => this.updateFood(e, "calories")}
              value={this.state.currentFood.calories}
            />
            <input
              type="text"
              name="image"
              placeholder="food image"
              onChange={e => this.updateFood(e, "image")}
              value={this.state.currentFood.image}
            />
            <button onClick={e => this.addFood(e)}>SAVE</button>
          </form>
        )}
      </div>
    );
  }
}

export default App;
