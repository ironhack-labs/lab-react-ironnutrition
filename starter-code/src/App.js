import React, { Component } from 'react';

import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddNewFood from './components/AddNewFood';
import Search from './components/Search';
import FoodList from './components/FoodList';

class App extends Component {
	constructor() {
		super();
		this.state = {
			foods,
			foodForm: false,
			filterFoods: foods,
			foodList: {
				foods: [],
				totalCalories: 0
			}
		};
	}

	addFood = (food) => {
		const foods = [ ...this.state.foods ];
		//console.log(foods);
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

	addToList = (food) => {
		const foods = [ ...this.state.foodList.foods ];

		foods.push(food);
		this.setState({
			foodList: { foods, totalCalories: this.state.foodList.totalCalories + food.calories }
		});
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
						{this.state.filterFoods.map((food, i) => <FoodBox key={i} food={food} add={this.addToList} />)}
					</div>
					<div className="column">
						{this.state.foodForm ? <AddNewFood addFood={this.addFood} showForm={this.showForm} /> : null}
						<h2 className="subtitle">Today's foods</h2>
						<ul>{this.state.foodList.foods.map((food, i) => <FoodList key={i} food={food} />)}</ul>
						<strong>Total: {this.state.foodList.totalCalories}</strong>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
