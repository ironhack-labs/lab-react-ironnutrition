import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodContainer from './components/FoodContainer/FoodContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="h1">IronNutrition</h1>
        <FoodContainer />
      </div>
    );
  }
}

export default App;
