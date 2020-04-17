import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import './App.css';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    appFoods: foods
  }

  render() {
    return (
      <div className="App">
        {this.state.appFoods.map((item, index) => {
            return <FoodBox key={index} comida={item}/>
        })}
        <AddFood/>
      </div>
    );
  }
}

export default App;

