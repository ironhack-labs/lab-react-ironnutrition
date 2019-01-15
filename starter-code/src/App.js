import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import { Header } from "./components/Header";
import FoodList from "./components/FoodList";
import { TdayFoodSection } from "./components/TdayFoodSection";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodData: foods,
      todayFoodData: [],
      todayTotalCals: 0
    };
  }

  handleAdd(newFood) {
    this.state.foodData.push(newFood);
    this.setState({ foodData: this.state.foodData });
  }

  addItemToday(todayFood) {
    let index = this.state.todayFoodData.findIndex(
      p => p.name === todayFood.name
    );
    //check if the food is already on the Today List
    if (index < 0) {
      this.state.todayFoodData.push(todayFood);
      this.setState({ todayFoodData: this.state.todayFoodData });
    } else {
      this.state.todayFoodData[index] = {
        name: todayFood.name,
        calories:
          parseInt(this.state.todayFoodData[index].calories) +
          parseInt(todayFood.calories),
        quantity:
          parseInt(this.state.todayFoodData[index].quantity) +
          parseInt(todayFood.quantity)
      };

      this.setState({ todayFoodData: this.state.todayFoodData });
    }

    //calculate total cals for the day
    this.state.todayTotalCals = this.state.todayFoodData.reduce((a, b) => {
      return a + b["calories"];
    }, 0);
    this.setState({ todayTotalCals: this.state.todayTotalCals });
  }

  handleDelete(idx) {
    this.state.todayFoodData.splice(idx, 1);
    this.setState({ todayFoodData: this.state.todayFoodData });
  }

  render() {
    return (
      <div className="App">
        <Header addFood={(newFood)=>{this.handleAdd(newFood)}}/>
          <div className="columns section">
            <FoodList
              foodData={this.state.foodData}
              addItemToday={todayFood => this.addItemToday(todayFood)}
            />
            <TdayFoodSection
              foodList={this.state.todayFoodData}
              totalCals={this.state.todayTotalCals}
              onDelete={idx => this.handleDelete(idx)}
            />
          </div>
        </div>
    );
  }
}

export default App;
