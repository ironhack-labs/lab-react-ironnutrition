import React, { Component } from 'react';
import foods from './foods.json'
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import SearchBar from './components/SearchBar';
import {FoodBox} from './components/FoodBox';
import FoodForm from './components/FoodForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      foodsArray: foods,
      filteredArray: foods
    }
  }
  addFood = (food) => {
    this.state.foodsArray.push(food);
    this.setState({
      foodsArray: this.state.foodsArray
    })
  }
    
  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <SearchBar />
        <FoodForm foodToAdd={food => this.addFood(food)}/>
        <div className="columns">
          <div className="column">  
            {this.state.filteredArray.map((e) => <FoodBox key={e.name} food={e}/>)}          
          </div>
        </div>
      </div>
  
    );
  }
}

export default App;
