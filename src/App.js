import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import AddFood from './components/AddFood/AddFood';

class App extends Component {
	state = {
		foods,
		filteredFoods: foods,
	}

	addFood = foodForm => {
		this.setState({ foods: [...this.state.foods, foodForm], filteredFoods: [...this.state.filteredFoods, foodForm] }, () => console.log(this.state.foods));
	}

	render() {
		return (
			<div className='container'>
				<h1 className='title'>IronNutrition</h1>
				<input type='text' className='input search-bar' name='search' placeholder='Search' />
				<div className='columns'>
					<div className='column'>
						{this.state.filteredFoods.map(food => {
							return (
								<FoodBox name={food.name} image={food.image} calories={food.calories} key={food.name} />
							)
						})}
					</div>
				</div>
				<AddFood create={this.addFood} />
			</div>
		)
	}
}

export default App;
