import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: foods
    }
    
  }

  render() {
    
    

    return (
      <div className="App">
      {this.state.foods.map(food=><FoodBox {...food} />)}
        
      </div>
    );
  }
}

export default App;
