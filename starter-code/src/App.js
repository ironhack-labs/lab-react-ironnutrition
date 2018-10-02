import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import {Foodbox} from './Foodbox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       {/* {foods.map((e,i) => { */}
         <Foodbox/>
          {/* )} */}
      </div>
    );
  }
}

export default App;
