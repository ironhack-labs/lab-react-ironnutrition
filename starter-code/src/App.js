import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FoodList from './foodbox/FoodList';


class App extends Component {
  render() {
    return (
      <div className="App">
      <FoodList />
      </div>
    )
  }
}

export default App;
