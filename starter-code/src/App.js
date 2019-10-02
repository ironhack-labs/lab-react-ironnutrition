import React, { Component } from 'react';
import FoodBox from './FoodBox';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';
// import Test from './Test';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        {foods.map((value, idx) => <FoodBox key={idx} {...value} /> )}
      </div>
    );
  }
}

export default App;
