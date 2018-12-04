import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox.js'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FoodBox food={foods[0]} ></FoodBox>
      </div>
    );
  }
}

export default App;
