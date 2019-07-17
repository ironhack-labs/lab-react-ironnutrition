import React, { Component } from 'react';
import FoodList from './components/FoodList'
import 'bulma/css/bulma.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <FoodList/>
      </div>
    );
  }
}

export default App;
