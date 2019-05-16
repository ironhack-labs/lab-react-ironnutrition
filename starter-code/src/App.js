import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox/FoodBox'



import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value="" />
      </div>
      <div className="columns">
				<div class="column">
					<FoodBox {...foods[0]}/>
				</div>
			
    
			</div>
      </div>
    );
  }
}

export default App;
