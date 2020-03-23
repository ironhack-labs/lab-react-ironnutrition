import React, { Component } from 'react';
import './App.css';
import FoodList from './Components/FoodList';
import NewFood from './Components/NewFood';
import FoodContextProvider from './contexts/FoodContext';
import Search from './Components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodContextProvider>
          <Search/>
          <FoodList/>
          <NewFood/>
        </FoodContextProvider>
      </div>
    );
  }
}

export default App;
