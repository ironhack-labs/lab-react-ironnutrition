import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox/FoodBox';



class App extends Component {

  constructor(){
    super();
    
    this.state = {
      foods: foods
    }
  }



  render() {
    return (
      <div className="App">
      {this.state.foods.map((food, idx) =>(
        <FoodBox food={food}  />

      ))}
        
      </div>
    );
  }
}

export default App;
