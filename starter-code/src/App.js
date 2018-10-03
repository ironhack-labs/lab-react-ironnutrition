import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FoodboxContainer from "./Components/FoodboxContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodboxContainer/>
      </div>
    );
  }
}

export default App;
