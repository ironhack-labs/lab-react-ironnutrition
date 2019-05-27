import React, { Component } from 'react';
import './App.css';
import food from './data/foods.json'
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1>IronNutrition</h1>
        </div> 
        <div>
          <AddFood/>
        </div>
        <div>
          <FoodList foodList = {food} />
        </div>
        
      </div>
    );
  }
}

export default App;
