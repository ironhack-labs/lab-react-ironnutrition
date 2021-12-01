import './ListFood.css';
import 'bulma/css/bulma.css'
import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox';
import Search from './Search';


class ListFood extends Component {
	
	state = {
		foods: foods,
		showForm: false,
		name: '',
		calories: '',
		image: '',
		quantity: '',
		everyFood: foods,
		todaysFood: []
	}

	addFood = () => {
		const newFood = {
			name: this.state.name,
			calories: this.state.calories,
			image: this.state.image,
			quantity: this.state.quantity
		}

		this.setState({
			foods: [...this.state.foods, newFood],
			everyFood: [...this.state.everyFood, newFood],
			showForm: false
		})
	}

	handleChange = (e) => {
		let { name, value} = e.currentTarget
		this.setState({
			[name]: value
		})
		console.log(this.state)
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}
	

	showForm = () =>{
		this.setState({
			showForm: true
		})	
	}

	searchFood = (e) => {
		let searchValue = e.currentTarget.value;
		let filteredFoods = this.state.everyFood.filter(food => food.name.toLowerCase().includes(searchValue.toLowerCase()))
		this.setState({
			foods: filteredFoods
		})
		console.log(this.state.foods)
	}

	addTodaysFood = (e) => {
		
		let newFood = e.currentTarget.value;
		console.log(newFood)
		this.setState({
			todaysFood: [...this.state.todaysFood, newFood]
		})
	}

	render(){
		return(
			<div>
				<Search searchFood={()=> this.searchFood}/>
				<button onClick={this.showForm}>Create Food</button>
				{this.state.showForm ? <form onSubmit={this.handleSubmit} className="new-food-form">

					<label>
						Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
					</label>

					<label>
						Calories: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
					</label>

					<label>
						Image: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
					</label>

					<label>
						Quantity: <input onChange={this.handleChange} value={this.state.quantity}t ype="text" name="quantity" />
					</label>

					<input onClick={this.addFood} type="submit" value="Submit Food" />
				</form> : null}
				<div className="todays-food">
					<h1>Today's Food</h1>
					<ul>
						{this.state.todaysFood.map((food, index )=> <li>{food}</li>)}
					</ul>
				</div>
				{this.state.foods.map((food, index )=> <FoodBox key={index} name={food.name}
					image={food.image} calories={food.calories} quantity={food.quantity} todaysFood={() => this.addTodaysFood}/>)}
			</div>
		);
	}
}

export default ListFood;