import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import FoodList from './components/FoodList';
import AddNewFood from './components/AddNewFood';
import SearcBar from './components/SearcBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearcBar/>
       <FoodList/>
       <AddNewFood/>
      </div>
    );
  }
}

export default App;
