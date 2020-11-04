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
		searchString: '',
	}

	addFood = foodForm => {
		this.setState({ foods: [...this.state.foods, foodForm], filteredFoods: [...this.state.filteredFoods, foodForm] }, () => console.log(this.state.foods));
	}

	handleSearch = event => {
		this.setState({searchString: event.target.value}, () => {
			const filtered = this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.searchString.toLowerCase()));
			this.setState({filteredFoods: filtered});
		});
	}

	render() {
		return (
			<div className='container'>
				<h1 className='title'>IronNutrition</h1>
				<input type='text'
				className='input search-bar'
				name='search'
				placeholder='Search'
				onChange={this.handleSearch}
				value={this.state.searchString} />
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
