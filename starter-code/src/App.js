import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodList from './FoodList';



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
