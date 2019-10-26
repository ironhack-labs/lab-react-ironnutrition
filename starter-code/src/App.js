import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodList from './FoodList.js'
import TodaysFoods from './TodaysFoods.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodList />
        <TodaysFoods />
      </div>
    );
  }
}

export default App;
