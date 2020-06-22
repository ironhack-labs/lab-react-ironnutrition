import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';

class App extends Component{
	constructor() {
		super()
		this.addFoodHandler = this.addFoodHandler.bind(this);
		this.toggleForm = this.toggleForm.bind(this);
		this.searchFood = this.searchFood.bind(this);
		this.productQuantity = this.productQuantity.bind(this);
		this.addFoodTolist = this.addFoodTolist.bind(this);
	}
	
	state = {
		theFood: foods,
		search: undefined,
		showForm: false,
		foodList: [],
		total: undefined
	}

	searchFood(event){
		event.preventDefault(); 
		if(event.target.value !== ''){
			let searchQuery = event.target.value.toLowerCase()
			let filterFood = foods.filter((event) =>{
			 	return	event.name.toLowerCase().includes(searchQuery)
			})
			this.setState({
				theFood: filterFood
			})
		} else {
			this.setState({
				theFood: foods
			})
		}
	}

	toggleForm(event){
		if(!event.target === undefined){
			event.preventDefault(); 
		}
        this.setState({
			showForm: !this.state.showForm
		})
	}

	addFoodHandler(newFood){
		const updateFoodList = [...this.state.theFood];
		updateFoodList.unshift(newFood);
		this.setState({
			theFood: updateFoodList
		})
	}

	productQuantity(name, newQuantity){
		let newTheFood = this.state.theFood.map((food)=>{
			if( food.name === name) food.quantity = parseInt(food.quantity) + parseInt(newQuantity)
			return food
		})
		this.setState({
			theFood: newTheFood
		})
	}

	addFoodTolist(theName, theCalories, theQuantity){
		const foodItem = {name: theName, calories: theCalories, quantity: theQuantity}
        const newFoodList = [foodItem, ...this.state.foodList];
        
        let totalCalories = 0;

        newFoodList.forEach((food)=>{
            debugger
            totalCalories += food.calories;
            return totalCalories
        })

		this.setState({
            foodList: newFoodList,
            total: totalCalories
		})

	}

	render(){
		return (
			<div className="App">
				<div className="container">
					<h1 className="title">IronNutrition</h1>
					<div>
						<input onChange={this.searchFood}
							type="text"
							className="input search-bar"
							name="search"
							placeholder="Search"
						/>
					</div>
					
					<div className="columns">
						<div className="column">
							<button className="add-food-show-form" onClick={this.toggleForm}>Add product</button>  
							{
								this.state.theFood.map((food, index)=>(
										<FoodBox key={`${index}:${food.name}`}name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} quantityCountFunction={this.productQuantity} addFoodTolist={this.addFoodTolist}/>
									)
								)
							}
						</div>

						<div className="column content">
								<h2 className="subtitle">Today's foods</h2>
								<ul>
									{
										this.state.foodList.map((food, index)=>(
											<FoodList key={`${index}:${food.name}`} name={food.name} calories={food.calories} quantity={food.quantity}/>
										))
									}
								</ul>
								<strong>Total: {this.state.total} cal</strong>
								{ this.state.showForm === true &&
									<div>
										<AddFood addTheFood={this.addFoodHandler} handleQuantity={this.manageQuantity} toggleTheForm={this.toggleForm}/>
									</div>
								}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App;
