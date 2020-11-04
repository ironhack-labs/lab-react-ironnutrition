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
		foodList: [],
		totalCalories: 0,
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

	handleList = (food) => {
		this.setState({foodList: [...this.state.foodList, food]})
	}

	handleCountReturn = (name, count, cal) => {
        const returned = {
            name: name,
			qty: count,
			calories: cal,
			totalCals: count * cal,
		}
		const nameArray = this.state.foodList.map(f => f.name)
		if (nameArray.includes(returned.name)) {
			const toEdit = this.state.foodList[nameArray.indexOf(returned.name)];
			toEdit.qty = returned.qty;
			toEdit.totalCals = toEdit.qty * toEdit.calories;
			const foodListCopy = this.state.foodList;
			foodListCopy[nameArray.indexOf(returned.name)] = toEdit;
			const totalCals = foodListCopy.map(food => food.totalCals).reduce((acc, curr) => acc += curr);
			this.setState({foodList: foodListCopy, totalCalories: totalCals});
		} else {
			this.setState({foodList: [...this.state.foodList, returned]}, () => {
				const totalCals = this.state.foodList.map(food => food.totalCals).reduce((acc, curr) => acc += curr);
				this.setState({totalCalories: totalCals});
	
			});	
		}
	}

	displayList = () => {
		const list = this.state.foodList.map((food, idx) => <li key={idx} >{food.qty} {food.name} = {food.totalCals} cal</li>);
		return list
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
								<FoodBox name={food.name}
								image={food.image}
								calories={food.calories}
								key={food.name}
								handler={this.handleList}
								listHandler={this.handleCountReturn} />
							)
						})}
					</div>
					<div className='column content'>
						<h2 className='subtitle'>Today's Foods</h2>
						<ul>
							{this.displayList()}
						</ul>
						<strong>Total: {this.state.totalCalories}</strong>
					</div>
				</div>
				<AddFood create={this.addFood} />
			</div>
		)
	}
}

export default App;
