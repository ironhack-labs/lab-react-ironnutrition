import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import Searchbar from "./components/Searchbar";
import AddFood from "./components/AddFood";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFood: foods,
      button: false
    };
  }

  filteredFood = research => {
    const search = research.searchBarValue.toLowerCase();
    const copiedFood = [...foods];
    var newRes = copiedFood.filter(food =>
      food.name.toLowerCase().includes(search)
    );
    this.setState({ allFood: newRes });
  };

  setButton = event => {
    const newValue = !this.state.button;
    this.setState({
      button: newValue
    });
  };

  addedFood = newFood => {
    const copiedFood = [...this.state.allFood];
    copiedFood.push(newFood);
    console.log(newFood);
    this.setState({
      allFood: copiedFood,
      button: false
    });
  };

  quantityAdded = index => {
    const copiedFood = [...this.state.allFood];
    copiedFood[index].quantity += 1;
    this.setState({
      allFood: copiedFood
    });
  };

  render() {
    const todayFood = this.state.allFood.filter(food => food.quantity);
    const todayCal = todayFood.map(food => {
      return food.quantity * food.calories;
    });
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div className="add-container">
          <button onClick={this.setButton}>Add food</button>
          {this.state.button && <AddFood addFood={this.addedFood} />}
        </div>
        <Searchbar filteringFood={this.filteredFood} />
        <div className="columns">
          <div className="column">
            {this.state.allFood.map((food, index) => {
              return (
                <FoodBox
                  numero={index}
                  {...food}
                  addQuantity={this.quantityAdded}
                />
              );
            })}
          </div>
          <div className="column">
            <h1>Today's food</h1>
            <div>
              <ul>
                {todayFood.map(food => {
                  const totalQuantity = food.quantity * food.calories;
                  return (
                    <li>
                      {food.quantity} {food.name} = {totalQuantity}
                      cal
                    </li>
                  );
                })}
              </ul>
              {todayFood[0] && (
                <p>
                  Total= {todayCal.reduce((acc, val) => acc + val)} calories
                </p>
              )}
              {!todayFood[0] && <p>Total= 0 calories</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
