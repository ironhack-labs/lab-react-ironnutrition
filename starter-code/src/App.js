import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./component/FoodBox.js";
import foods from "./foods.json";
import AddFood from "./component/AddFood.js";
import SearchBar from "./component/Search.js";

function filtreTexte(requete) {
  return foods.filter(function(el) {
    return el.toLowerCase().indexOf(requete.toLowerCase()) > -1;
  });
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { foods };
  }

  toggleForm() {
    const oldFilter = this.state.showForm;
    const showForm = (
      <AddFood foodSubmit={foodObject => this.addFood(foodObject)} />
    );
    // set the state to the opposite of the boolean value if had before
    this.setState({ showForm: !oldFilter });
  }

  addFood(foodObject) {
    const food = this.state.foods;
    food.unshift(foodObject);
    this.setState({ foods: food });
  }

  render() {
    const { showForm } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
          <SearchBar />
        </header>
        <button onClick={() => this.toggleForm()}>Show/Disable Form</button>
        {showForm ? (
          <AddFood foodSubmit={foodObject => this.addFood(foodObject)} />
        ) : null}
        <ul>
          {foods.map((oneFood, index) => {
            return (
              <FoodBox
                name={oneFood.name}
                calories={oneFood.calories}
                image={oneFood.image}
                quantity={oneFood.quantity}
              />
            );
          })}
        </ul>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
