import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';


class App extends Component 
{
  render() 
  {
    return (
    <div className='App'>
      <FoodBox />
    </div>
    )
  }
}

export default App;


// handleChange
// pushOrder
// showOrder
// showFoods
// addFoodToList
// showForm
// toggleHidden

