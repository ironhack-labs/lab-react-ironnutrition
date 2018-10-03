import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {FoodBox} from './FoodBox.js'
import foods from './foods.json'

  
 
  class App extends Component {
    constructor(){
      super();
      this.state = {
        foods:foods,
        foodsFormState:false
      }
    }
    
    render() {
      return (
      <div className="App">
        {this.state.foods.map((e, i)=> {
        return(
          <FoodBox key={i} {...e}/>
        )
      })}
               
      </div>
    );
  }
}


export default App;
