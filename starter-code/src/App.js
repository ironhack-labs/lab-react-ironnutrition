import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

class App extends Component {
	constructor() {
		super();
		this.state = {
			foods
		};
	}

	render() {
		return <div className="App">{this.state.foods.map((food, i) => <FoodBox key={i} food={food} />)}</div>;
	}
}

export default App;
