import React, { Component } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './FoodBox';
import AddFood from './AddFood';

class App extends Component {
  state = {
    foods: foods,
    name: '',
    calories: '',
    image: '',
    quantity: 0
  };

  createFoodRow = _ => {
    const getFoodRow = this.state.foods.map((food, i) => {
      return <FoodBox key={i} name={food.name} calories={food.calories} image={food.image} />;
    });
    return getFoodRow;
  };

  addItems = e => {
    e.preventDefault();
    const foodItems = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    };
    const newFood = [...this.state.foods];
    newFood.push(foodItems);
    console.log(foodItems);
    this.setState({
      foods: newFood
    });
  };

  addNewFood = e => {
    e.preventDefault();
    console.log(e.target.name, ' ', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  searchFood = e => {
    let filteredFood = this.state.foods.filter(food => {
      console.log('this is the value', e.target.value);
      return food.name.includes(e.target.value);
    });

    this.setState({
      foods: filteredFood
    });
    if (!e.target.value) {
      this.setState({
        foods: foods
      });
    }
  };

  addMenuItem = i => {
    return <li>{this.state.foods[i].name}</li>;
  };

  render() {
    return (
      <div className="App">
        <AddFood addItems={this.addItems} addNewFood={this.addNewFood} />
        <br />
        <input name="food" onChange={this.searchFood} type="text" />
        <div>
          <h1>Today's Menu</h1>
        </div>
        <div>{this.createFoodRow()}</div>
        <div>
          <h1>Today's Menu</h1>
          <ul />
        </div>
      </div>
    );
  }
}

export default App;
