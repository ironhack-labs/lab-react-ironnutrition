import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
// import AddFormFood from './AddFoodForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox />
      </div>
    );
  }
}

export default App;
