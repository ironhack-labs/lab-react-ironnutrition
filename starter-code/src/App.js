import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import FoodList from './foodbox/FoodList';
import FoodContextProvider from './create/FoodContext';
import CreateFood from './create/CreateFood';
import Search from './create/Search';


class App extends Component {
  render() {
    return (
      <div className="App">
      <FoodContextProvider>
      <Search />
      <CreateFood />
      <FoodList />
      </FoodContextProvider>
      </div>
    )
  }
}

export default App;
