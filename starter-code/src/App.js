import React, { Component } from 'react';
import './App.css';
import FoodBox from "./FoodBox";
import "bulma/css/bulma.css"
import foods from "./foods.json"
class App extends Component {
  constructor(){
    super()
    this.state={foods:foods.map(e=>{
      e.quantity=1
      return e
    })}
  }
  
  render() {
    return (
      <div>
        {this.state.foods.map((f)=> <FoodBox key={f.name} {...f}/>)}
      </div>
    );
  }
}



export default App;
