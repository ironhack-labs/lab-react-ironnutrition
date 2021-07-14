import React, {Component} from 'react';
import './App.css';
import foodsJson from './foods.json';
import Food from './components/Food';
import { render } from '@testing-library/react';



class App extends Component{

  state = {
    foods: foodsJson
  };

  handleAddNewFood = (newFood) => {
    this.setState({
      foods: [newFood, ...this.state.foods]
    })
  }

  render(){
    return (
      <div>
            <div class="container">
              <div>
                {/* Search bar */}
              </div>
              <div class="columns">
                <div class="column">
                  <Food 
                    foods = {this.state.foods}
                    onAddNewFood = {this.handleAddNewFood}
                  />
                </div>
                <div class="column content">
                  <h2 class="subtitle">Today's foods</h2>
                  <ul>
                    <li>1 Pizza = 400 cal</li>
                  </ul>
                  <strong>Total:</strong>
                </div>
              </div>
      </div>
  
        
      </div>
    );
  









  }


}

export default App;
