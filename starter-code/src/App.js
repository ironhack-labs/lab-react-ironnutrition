import React, { Component } from "react";
import logo from "./logo.svg";
import "bulma/css/bulma.css";
import FoodBox from "./components/foodbox";
import AddFood from "./components/addfood";
import "./App.css";
import food from "./foods.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: food
    };
  }

  addFoodHandler = newFood => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(newFood);
    this.setState({ foods: foodsCopy });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <AddFood addFood={this.addFoodHandler} />
          {this.state.foods.map(item => (
            <FoodBox
              name={item.name}
              calories={item.calories}
              image={item.image}
              key={item.name + item.calories}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
