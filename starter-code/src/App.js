import React, { Component } from 'react';
import './App.css';
import FoodList from './components/FoodList';

class App extends Component {
	render() {
		return (
			<div>
				<h1 className="has-text-centered"> IronNutrition </h1>
				<FoodList />
			</div>
		);
	}
}

export default App;
