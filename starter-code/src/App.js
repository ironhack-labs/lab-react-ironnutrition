import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood.js";

class App extends Component {
  state = {
    foodList: foods,
    showForm: false
  };

  newerFoodArray = this.state.foodList.map((eachFood, i) => {
    return eachFood.name;
  });

  toggleForm = () => {
    let showBool = !this.state.showForm
    this.setState({
      showForm: showBool
    })
  }

  render() {
    console.log(this.newerFoodArray);
console.log(this.state.showForm)
    return (
      <div className="App">
          <button className="newFoodButton" onClick={this.toggleForm}> Add Food </button>
        <div className="foodList">
         {this.state.showForm && <AddFood />}
          <FoodBox />
        </div>
      </div>
    );
  }
}

export default App;
