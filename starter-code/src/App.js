import React, { Component } from 'react';

import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddNewFood from './components/AddNewFood';

class App extends Component {
	constructor() {
		super();
		this.state = {
			foods,
			foodForm: false
		};
	}

	addFood = (food) => {
		const foods = [ ...this.state.foods ];
		console.log(foods);
		foods.push(food);
		this.setState({ foods });
	};

	showForm = () => {
		this.setState({ foodForm: !this.state.foodForm });
	};

	render() {
		return (
			<div className="App">
				<button className="add-food" onClick={this.showForm}>
					Añadir comida
				</button>
				<div className="columns">
					<div className="column">{this.state.foods.map((food, i) => <FoodBox key={i} food={food} />)}</div>
					<div className="column">
						{this.state.foodForm ? <AddNewFood addFood={this.addFood} showForm={this.showForm} /> : null}

						<h2 className="subtitle">Today's foods</h2>
						<ul>
							<li>1 Pizza = 400 cal</li>
							<li>2 Salad = 300 cal</li>
						</ul>
						<strong>Total: 700 cal</strong>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
