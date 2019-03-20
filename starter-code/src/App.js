import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import FoodList from './component/FoodList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodList />
      </div>
    );
  }
}

export default App;
