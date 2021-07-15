import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Today from './components/Today';
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    allFood: foods,
    filteredFood: foods,
    totalFood: [],
  };

  handleAddFood = (food) => {
    this.setState({
      allFood: [food, ...this.state.allFood],
    });
  };
  handleSearch = (event) => {
    let input = event.target.value;
    const { allFood } = this.state;
    let filteredFood = allFood.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({
      filteredFood: filteredFood,
    });
  };
  handleAddTotal = (food, quantity) => {
    let myFood = { ...food, quantity };

    this.setState({
      totalFood: [myFood, ...this.state.totalFood],
    });
  };
  render() {
    const { totalFood, filteredFood } = this.state;
    return (
      <div>
        <div className="columns">
          <div className="column">
            <FoodBox
              onAdd={this.handleAddFood}
              onSearch={this.handleSearch}
              allFoods={filteredFood}
              onTotal={this.handleAddTotal}
            />
          </div>
          <div className="column">
            <Today totalFood={totalFood} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
