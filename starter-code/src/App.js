import React, { Component } from "react";
// import logo from './logo.svg';
import "bulma/css/bulma.css";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import FoodForm from "./FoodForm";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayedFoods: foods,
      allFoods: foods,
      foodFormVisible: false,
      totalCalories: 0,
      today: []
    };
  }

  showFoodForm = () => {
    this.setState({ foodFormVisible: !this.state.foodFormVisible });
  };

  addNewFood = food => {
    this.state.allFoods.unshift(food);
    this.setState({
      displayedFoods: this.state.allFoods,
      allFoods: this.state.allFoods,
      foodFormVisible: !this.state.foodFormVisible
    });
  };

  searchFood = input => {
    let { allFoods } = this.state;
    let filtered = allFoods.filter(e => e.name.toLowerCase().includes(input));
    this.setState({ displayedFoods: filtered });
  };

  addToday = meal => {
    
    this.state.today.push(meal);
    this.setState({today: this.state.today, totalCalories: this.state.totalCalories + meal.cals})
  }

  render() {
    return (
      <main className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <h1 className="level-item title">IronNutrition</h1>
            </div>
            <div className="level-right">
              {!this.state.foodFormVisible &&
                <button className="button is-link" onClick={this.showFoodForm}>
                  Add new food
                </button>
              }
            </div>
          </div>
          <input
            className="input level"
            type="text"
            placeholder="Search 🍖"
            onChange={input =>
              this.searchFood(input.target.value.toLowerCase())
            }
          />
          {this.state.foodFormVisible &&
            <FoodForm newFood={food => this.addNewFood(food)} />
          }
          <div className="columns">
            <div className="column">
             
                {this.state.displayedFoods.map(element => (
                  <FoodBox key={element.name} {...element} addToday={meal => this.addToday(meal)}/>
                ))}
              
            </div>
            <div className="column">
                <h3 className="title">Today's foods</h3>
                <ul>
                  {this.state.today.map((e,i) => <li key={i}>{e.qty} {e.name} = {e.cals} cal</li> )}
                </ul>
                <p>Total: {this.state.totalCalories} cal</p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
