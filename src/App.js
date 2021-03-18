import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends React.Component {
  state = {
    foods: foods,
  };

  handleAddFood = (newFood) => {

    this.setState({foods: [newFood, ...this.state.foods]})
    // const foodsCopy = [...this.state.foods];
    // foodsCopy.push(newFood);

    // this.setState({
    //   foods: foodsCopy,
    // });
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <AddFood foods={this.state.foods} />
        {this.state.foods.map((food, i) => {
          return(<FoodBox key={i} food={food}/>)
        })}
      </div>
    );
  }
}

export default App;
