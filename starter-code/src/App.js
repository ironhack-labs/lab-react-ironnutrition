import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FoodList from './foodbox/FoodList';
import FoodContextProvider from './create/FoodContext';
import CreateFood from './create/CreateFood';


class App extends Component {
  render() {
    return (
      <div className="App">
      <FoodContextProvider>
      <CreateFood />
      <FoodList />
      </FoodContextProvider>
      </div>
    )
  }
}

export default App;
