import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import Picker from './components/Picker'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <div id="root">
          <div className="container">
            <h1 className="title">IronNutrition</h1>
            <div className="columns">
              <div className="column">
              <FoodBox />
              </div>
              <div className="column content">
              <Picker />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}