import React, { Component } from 'react';
import './App.css';
import FoodList from './Components/FoodList';
import NewFood from './Components/NewFood';
import FoodContextProvider from './contexts/FoodContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodContextProvider>
          <FoodList/>
          <NewFood/>
        </FoodContextProvider>
      </div>
    );
  }
}

export default App;
