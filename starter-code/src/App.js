import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from "./Components/FoodBox/FoodBox"
import Foods from "./foods.json"



class App extends Component {
  constructor () {
    super()
    this.state = {
      foods: Foods
    }
  }



  render() {
    return (
      <div className="App">
       {this.state.foods.map(elem=><FoodBox  food={elem}/>)}
      
      </div>
     
    );
  }
}

export default App;
