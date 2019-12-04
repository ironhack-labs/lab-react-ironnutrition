import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodList from './components/FoodList'
import NewFood from './components/NewFood'




class App extends Component {
  render() {
    return (
      <div className="App">

        <FoodList />
        {/* {false ? <NewFood /> : ""} */}

      </div>
    );
  }
}

export default App;
