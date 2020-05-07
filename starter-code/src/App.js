import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';
import Search from './components/Search';

class App extends Component {
  state = {
    foods,
    allfoods: foods,
    todayFood: [{calories: "400", food: "Pizza ", value: "1"},{calories: "400", food: "Pizza ", value: "1"}],
  };
  searchFood = e => {
    //const foundFood = [... this.state.foods]
    if (e.target.value) {
      const filteredFoods = [...this.state.allfoods].filter(food =>
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ foods: filteredFoods });
    } else {
      this.setState({ foods: this.state.allfoods });
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    const calories = name.split(' ')[name.split(' ').length - 1];
    const food = name.replace(calories, '');

    let foodInInput = {};
    foodInInput[food] = { food ,calories, value };

    const allFoods = [...this.state.todayFood,foodInInput];



     this.setState({ todayFood:allFoods });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    return (
      <div className="App">
        <Search fcn={this.searchFood} />
        <main>
          <div>
            {this.state.foods.map((food, idx) => (
              <FoodBox
                className="FoodBox"
                food={food}
                key={idx}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            ))}
          </div>
          <div>
            <h1>Today's Foods </h1>
            <p>Total: {this.state.cal} cal</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
