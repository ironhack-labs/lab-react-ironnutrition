import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./components/FoodBox";
import foods from "./foods.json";
import FoodForm from "./components/FoodForm";
import SearchFood from "./components/SearchFood";
import TodaysFoodList from "./components/TodaysFoodList";

class App extends Component {
  state = {
    foods: [...foods],
    foodsDisplay: [...foods],
    showForm: true,
    todaysFoods: [],
    totalCalories: 0
  };

  toggleFood = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  addFood = foodObj => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.unshift(foodObj);
    this.setState({ foods: foodsCopy });

    const foodsDisplayCopy = [...this.state.foods];
    foodsDisplayCopy.unshift(foodObj);
    this.setState({ foodsDisplay: foodsDisplayCopy });
  };

  filterFood = query => {
    const foodsCopy = [...this.state.foods];

    const newArr = foodsCopy.filter(food =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );

    this.setState({ foodsDisplay: newArr });
  };

  addTodaysFood = newTodaysFood => {
    const newTodaysFoods = [...this.state.todaysFoods];
    newTodaysFoods.unshift(newTodaysFood);
    this.setState({ todaysFoods: newTodaysFoods });

    const totalCalories = this.state.totalCalories;
    const newTotalCalories =
      totalCalories + newTodaysFood.quantity * newTodaysFood.calories;

    this.setState({ totalCalories: newTotalCalories });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleFood}>Add more foods!</button>

        {this.state.showForm ? (
          <FoodForm addFood={this.addFood} toggleFood={this.toggleFood} />
        ) : null}

        <SearchFood filterFood={this.filterFood} />
        <div className="lists">
          <div className="list">
            {this.state.foodsDisplay.map(oneFood => {
              return (
                <FoodBox food={oneFood} addTodaysFood={this.addTodaysFood} />
              );
            })}
          </div>
          <div className="list">
            <h2>Todays Foods!</h2>
            <ul>
              {this.state.todaysFoods.map(oneFood => {
                return <TodaysFoodList food={oneFood} />;
              })}
            </ul>
            <p>Total calories: {this.state.totalCalories} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
