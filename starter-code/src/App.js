import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './componentes/FoodBox';
import Button from './componentes/Button';
import Form from './componentes/Form';
import SearchBar from './componentes/SearchBar';
import InfoToday from './componentes/InfoToday';

class App extends Component {
	state = {
		listFood: foods,
		showForm: false,
		myLiFood: []
	};

	showForm = () => {
		const newState = { ...this.state };
		newState.showForm = !newState.showForm;
		this.setState(newState);
	};

	addIngredient = (name, img, calor) => {
		console.log(name);
		const newState = { ...this.state };

		newState.listFood.push({
			name: name,
			calories: calor,
			image: img,
			quantity: 0
		});

		this.setState(newState);
	};

	filterListFood = (filtro) => {
		const newState = { ...this.state };

		newState.listFood = foods.filter((food) => {
			return food.name.indexOf(filtro) != -1;
		});
		this.setState(newState);
	};

	addIngredientToLi = (param) => {
		const newState = { ...this.state };
		newState.myLiFood.push(param);
		this.setState(newState);
	};

	render() {
		return (
			<div className="App">
				<SearchBar myfilter={this.filterListFood} />
				<InfoToday newInfo={this.state.myLiFood} />
				<FoodBox addIngredients={this.addIngredientToLi} listprop={this.state.listFood} />
				<Button onclick={this.showForm}>Show Form</Button>
				<Form checkShow={this.state.showForm} onclick={this.addIngredient} />
			</div>
		);
	}
}

export default App;
