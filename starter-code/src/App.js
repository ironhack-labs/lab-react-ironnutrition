import React, { Component } from 'react';
import './App.css';
import {FoodProvider} from "./components/foodContext";
import FoodList from './components/FoodList';

class App extends Component {
  render() {
    return (
      <FoodProvider>
      <div className="App">
        <FoodList/>
      </div>
      </FoodProvider>
    );
  }
}

export default App;
