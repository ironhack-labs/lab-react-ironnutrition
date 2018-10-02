import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {FoodBox} from './FoodBox';


class App extends Component {
  render() {
    return (
		<div className="App">
			<div className="container">
      			<h1 className="title">IronNutrition</h1>
      			<div><input type="text" className="input search-bar" name="search" placeholder="Search" value=""/></div>
      			<div class="columns">
        			<div class="column">
						<FoodBox/>
					</div>
						
				</div>
    		</div>
		</div>
    );
  }
}

export default App;
