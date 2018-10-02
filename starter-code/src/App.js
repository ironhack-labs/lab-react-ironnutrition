import React, { Component } from 'react';
import foods from './foods.json'
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import {SearchBar} from './components/SearchBar';
import {FoodBox} from './components/FoodBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="container">
          <h1 class="title">IronNutrition</h1>
          {/* <SearchBar /> */}
          <div class="columns">
            <div class="column">  
              {foods.map((e) => <FoodBox key={e.name} food={e}/>)}          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
