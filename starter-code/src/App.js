import React, { Component } from 'react';

import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddNewFood from './components/AddNewFood';
import Search from './components/Search';

class App extends Component {
	constructor() {
		super();
		this.state = {
			foods,
			foodForm: false,
			filterFoods: foods
		};
	}

	addFood = (food) => {
		const foods = [ ...this.state.foods ];
		console.log(foods);
		foods.push(food);
		this.setState({ foods });
	};

	findFood = (search) => {
		let filterFoods = [ ...this.state.foods ];
		filterFoods = filterFoods.filter((food) => food.name.toLowerCase().includes(search.toLowerCase()));
		this.setState({ filterFoods });
	};
	showForm = () => {
		this.setState({ foodForm: !this.state.foodForm });
	};

	render() {
		return (
			<div className="App">
				<h1>IronNutrition</h1>
				<Search search={this.findFood} />
				<button className="add-food" onClick={this.showForm}>
					Añadir comida
				</button>
				<div className="columns">
					<div className="column">
						{this.state.filterFoods.map((food, i) => <FoodBox key={i} food={food} />)}
					</div>
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
