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
    var foodWithQuantity = [];
    for (let i = 0; i < quantity; i++) {
      foodWithQuantity.push(food);
    }
    // var newObject = {
    //   food: food,
    //   quantity: quantity,
    //   calories
    // }
    // var filteredArray = []
    // filteredArray.push(food, )
    console.log('food w quant: ', foodWithQuantity);
    var newTotal = 0;
    var newFood = [...this.state.todaysFoods, ...foodWithQuantity];
    for (let i = 0; i < newFood.length; i++) {
      newTotal += newFood[i]['calories'];
    }
    this.setState({
      todaysFoods: newFood,
      total: newTotal
      // filteredArray: filteredArray
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
                <h2>Today's Foods</h2>
                {this.state.todaysFoods.map(food => (
                  <li>
                    {food.name} - {food.calories} cals
                  </li>
                ))}
                total = {this.state.total} cals
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
