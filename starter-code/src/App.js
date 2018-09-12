import React, { Component } from 'react';

import './App.css';
import foods from './foods.json';
import './Search';
import Search from './Search';
import FoodBox from './FoodBox';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods,
      searchText: '',
      todaysFoods: [],
      numberOfFood: 1,
      total: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClick(e, food, quantity) {
    var newFoodArray = foods.slice();
    for (let i = 0; i < newFoodArray.length; i++) {
      if (food['name'] === newFoodArray[i]['name']) {
        newFoodArray[i]['quantity'] += Number(quantity);
        console.log('update: ', newFoodArray[i]);
      }
    }
    var result = newFoodArray.filter(food => food.quantity > 0);
    var newTotal = 0;

    for (let i = 0; i < result.length; i++) {
      newTotal = result[i]['calories'] * result[i]['quantity'] + newTotal;
    }
    this.setState({
      todaysFoods: result,
      total: newTotal
    });
  }

  componentDidMount() {
    var foodArray = foods.slice();
    for (let i = 0; i < foodArray.length; i++) {
      return foodArray[i].name;
    }
    console.log(foodArray);
  }

  render() {
    return (
      <div className="App columns">
        <div className="column">
          <div className="columns">
            <div className="column">
              <h1>IronNutrition</h1>
              <br />
              <Search text={this.state.searchText} onChange={this.handleChange} />
              <br />
              <br />
            </div>
          </div>
          <div className="column">
            <div className="columns">
              <div className="column is-5 border">
                <h2>
                  <strong>Today's Foods</strong>
                </h2>
                {this.state.todaysFoods.map(food => (
                  <div>
                    {food.quantity} {food.name} at {food.calories} cals
                  </div>
                ))}
                total = <strong>{this.state.total} cals</strong>
              </div>
              <div className="column is-7">
                {this.state.foods
                  .filter(food => food.name.toLowerCase().includes(this.state.searchText.toLowerCase()))
                  .map((food, i) => (
                    <FoodBox
                      i={i}
                      onChange={this.handleChange.bind(this)}
                      food={food}
                      onClick={this.handleClick}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
