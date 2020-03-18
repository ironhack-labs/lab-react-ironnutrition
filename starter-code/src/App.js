import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox/FoodBox";
import NewFood from './components/NewFood/NewFood';

class App extends Component {
  state = {
    allFoods: [...foods],
    showForm: false
  };

  handleClick = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  addNewFood = food => {
    // 1st step: make a copy of the array
    const foodsCopy = [...this.state.allFoods];

    // 2nd: modify the copy of the array
    foodsCopy.push(food);

    // 3rd step: set the state of the original array to the new array
    this.setState({
      allFoods: foodsCopy,
      showForm: false
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <div className="food-list">
          <button onClick={this.handleClick}>Add New Food Item</button>
          { this.state.showForm ? <NewFood addNewFood={this.addNewFood}/> : null}
          {this.state.allFoods.map((food, id) => {
            return <FoodBox key={id} food={food} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
