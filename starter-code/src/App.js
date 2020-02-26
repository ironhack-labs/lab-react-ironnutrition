import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodList from './components/foodList'


class App extends Component {
  render() {
    return (
      <div>
        <body>
  <div id="root">
    <div className="container">
      <h1 className="title">IronNutrition</h1>
     
              <FoodList />
              </div>
              </div>
              </body>
      </div>
    );
  }
}

export default App;
