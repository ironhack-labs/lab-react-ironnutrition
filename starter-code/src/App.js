import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'

class App extends Component {
  render() {
    return (
      <div>
        <FoodBox/>
      </div> 
    );
  }
}

export default App;
