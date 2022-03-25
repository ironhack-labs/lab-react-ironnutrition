import React, { Component } from 'react';
import './App.css';
import FoodList from './components/FoodList/FoodList';
import food from './foods.json'

class App extends Component {
  render(){
    return (
      <div className="App container">
        <div className='row'>
          <FoodList food={ food } />
        </div>
      </div>
    );
  }
}

export default App;
