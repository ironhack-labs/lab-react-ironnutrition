import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Button from './Component/Button'
import FoodBoxElement from './Component/FoodBoxElement';


class App extends Component {
  constructor(props) {
    super(props);
     this.state = {
       Food: foods.map((foodsBox) => {
         return <FoodBoxElement {...foodsBox}/>
       })
     }
  }
  render() {
    
    
    return (
      <div className="ironNutrition">
        <h1>IronNutrition</h1>
        {
          this.state.Food
        }
        <Button/>
      </div>
    )
  }
  
}

export default App;
