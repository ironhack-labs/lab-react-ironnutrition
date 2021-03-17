import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'

class App extends React.Component {
  state ={
    foods: foods,
  }
  return (){
    <div className="App">
      <h1>IronNutrition</h1>
      <FoodBox foods={this.state.foods} />
    </div>
  };
}

export default App;
