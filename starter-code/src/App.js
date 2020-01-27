import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nutrition from './components/Nutrition.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{display: "flex", flexDirection: "flex-row"}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Pleasuredom ...</h1>
        </header>
        <Nutrition />
      </div>
    );
  }
}

export default App;
