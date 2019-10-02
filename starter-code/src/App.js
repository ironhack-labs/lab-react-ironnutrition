import React, { Component } from 'react';
import './App.css';
import FoodBox from './foodbox';
import Search from './search';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Search/>
        <FoodBox/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro"> */}
          {/* To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        Today's foods
        Total: 
        
      </div>
    );
  }
}

export default App;
