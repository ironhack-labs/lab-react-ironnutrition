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
    quantity: 0,
    boughtFood: {}
  };

  createFoodRow = _ => {
    const getFoodRow = this.state.foods.map((food, i) => {
      return (
        <FoodBox
          addQuantityAbove={this.addQuantityAbove}
          key={i}
          name={food.name}
          calories={food.calories}
          image={food.image}
        />
      );
    });
    return getFoodRow;
  };

  addQuantityAbove = food => {
    let boughtFoodCopy = { ...this.state.boughtFood };
    boughtFoodCopy[food.name] = food;
    this.setState({
      boughtFood: boughtFoodCopy
    });
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

  renderFood = e => {
    // console.log('this is the quantity', this.state.boughtFood.quantity);

    this.state.boughtItems &&
      Object.keys(this.state.boughtItems).map(key => <li>{this.state.boughtItems[key].name}</li>);
    console.log('this is the quantity', this.state.boughtFood.quantity);
  };

  render() {
    return (
      <div className="App">
        <AddFood addItems={this.addItems} addNewFood={this.addNewFood} />
        <br />
        <input name="food" onChange={this.searchFood} type="text" />
        <div>
          <h1>Today's Menu</h1>
          <ul>{this.renderFood()}</ul>
        </div>
        <div>{this.createFoodRow()}</div>
      </div>
    );
  }
}

export default App;
