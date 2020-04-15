import React, { Component } from 'react';
import './App.css';
import FoodContent from './components/FoodContent';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <FoodContent/>
      </div>
    );
  }
}

export default App;
