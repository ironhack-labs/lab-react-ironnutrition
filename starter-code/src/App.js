import React, { Component } from 'react';

import './App.css';

import 'bulma/css/bulma.css'
import FoodInfo from './components/FoodInfo'


class App extends Component {
  render() {
    return (
      <div >
       <h1>IronNutrition</h1>
      
      
       <FoodInfo/>
      </div>
    );
  }
}

export default App;
