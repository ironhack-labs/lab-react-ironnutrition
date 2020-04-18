import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';
import TodayFood from './components/TodayFood';


class App extends Component {
  state = {
    food: foods.slice(),
    foodAdded: []
  }

  handleAddFood = (name, calories, image, quantity) => {
    const newFood = {
      name: name,
      calories: calories,
      image: image,
      quantity: quantity,
    }
    const { food } = this.state;
    this.setState({
      food: [...food, newFood],
    });
  };
  
  handleSearch = (name) => {
    this.setState({
      food: foods.filter((food) => food.name.toLowerCase().includes(name.toLowerCase()))
    });
  }

  handleTodayFood = (name, calories, quantity) => {
    const { foodAdded } = this.state;
    let result = false

    for (let k in foodAdded) {
      let item = foodAdded[k]
      if (item.name === name) {
        result = k
        break;
      }
    }
    let our_array = foodAdded
    if (result) {
      our_array[result].quantity++
    } else {
      our_array.push({
        name: name,
        calories: calories,
        quantity: quantity,
      })
    }
    this.setState({
      foodAdded: our_array
    })
  }
  handleTotalCalories = () => {
    let result  = 0;
    this.state.foodAdded.forEach(e=>{
      result += (e.quantity * e.calories)
    })
    return <p>Total: {result} cal</p>
  }

  deleteTodayFood = (index) => {
    let deleteTodayFood = [...this.state.foodAdded]
    deleteTodayFood.splice(index, 1)
    this.setState({
      foodAdded: deleteTodayFood
    })
  }

  displayFoodBoxes = () => {
    return this.state.food.map((food, index) => {
      return <FoodBox name={food.name} image={food.image} calories={food.calories} click={this.handleTodayFood} />
    })
  }

  displayTodayFood = () => {
    return this.state.foodAdded.map((food, index) => {
      return <TodayFood name={food.name} key={index} index={index} click={this.deleteTodayFood} calories={food.calories} quantity={food.quantity} />
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <Search change = {this.handleSearch} />
        <AddFood click={this.handleAddFood} />
        <div className="Container">
          <div>
            {this.displayFoodBoxes()}
          </div>
          <div className="TodayFood">
            <h3>Today's Food</h3>
            <ul className="List">
              {this.displayTodayFood()}
            </ul>
            {this.handleTotalCalories()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
