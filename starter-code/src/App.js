import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';


class App extends Component {
  state = {
    food: foods.slice(),
  }
  render() {
    console.log(this.state.food)
    const { food } = this.state;
    return (
      <div className="App">
        {this.state.food.map((food, index)=> { 
          return <FoodBox name={food.name} img={food.image} calories={food.calories}/> 
        })}
      </div>
    );
  }
}

export default App;
