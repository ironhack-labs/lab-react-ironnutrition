import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodList from "./components/FoodList"


class App extends Component {
  render() {
    return (
    <FoodList/>
    );
  }
}

export default App;
