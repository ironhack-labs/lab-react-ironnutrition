import React, { Component } from "react";
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
    this.addNewFood = this.addNewFood.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    
  }

  addNewFood(e) {
    e.preventDefault();
    const allFood = this.state.foodArray;
    allFood.unshift(e);
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
        <button onClick={this.toggleForm}>Show Form</button>
        {showForm ? (
          <FoodForm foodSubmit={this.addNewFood} />
        ) : null}

        {foodArray.map((elm, idx) => {
          return (
            <div key={idx}>
              <FoodBox
                name={elm.name}
                image={elm.image}
                calories={elm.calories}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;