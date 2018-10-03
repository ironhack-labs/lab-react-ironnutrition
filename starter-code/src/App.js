import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import NewFoodForm from "./components/NewFoodForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      enableAdd: true,
      foods: foods
    };
  }

  toggleAdd = () => {
    this.setState({ enableAdd: !this.state.enableAdd });
  };

  addNewFood = food => {
    this.state.foods.push(food)
    this.setState({
      foods: this.state.foods
    });
  };

  render() {
    //console.log(this.state.foods);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <button onClick={this.toggleAdd}>
          {this.state.enableAdd ? "Enable" : "Disable"} Add new food
        </button>

        {this.state.enableAdd || (
          <NewFoodForm foodReady={food => this.addNewFood(food)} />
        )}


        <div id="allFoods">
          {this.state.foods.map((e, i) => {
            return (
              <FoodBox
                key={e.name}
                name={e.name}
                calories={e.calories}
                image={e.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
