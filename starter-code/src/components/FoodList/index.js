import React, { Component } from 'react';
import FoodBox from './../FoodBox';
import foods from './../../foods';
import './index.css';

export default class FoodList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			foodList: foods,
			foodListVisible: foods,
			formDisplay: false,
			formName: '',
			formCalories: '',
			formImage: '',
			searchTerm: '',
			itemsList: [],
		};
	}

	showFoodList = () => {
		return this.state.foodListVisible.map((item, i) => {
			return (
				<FoodBox
					atributes={item}
					key={i}
					addToTheList={this.addToGroceryList}
				/>
			);
		});
	};

	toggleForm = () => {
		this.setState({ formDisplay: !this.state.formDisplay });
	};

	updateInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addNewFood = (e) => {
		e.preventDefault();
		let clone = [...this.state.foodList];
		let newFood = {
			name: this.state.formName,
			calories: this.state.formCalories,
			image: this.state.formImage,
		};
		clone.unshift(newFood);
		this.setState({ foodList: clone });
	};

	search = (e) => {
		let clone = [...this.state.foodList];
		let searchTerm = e.target.value;

		let filteredList = clone.filter((eachFood) => {
			return eachFood.name.toUpperCase().includes(searchTerm.toUpperCase());
		});

		this.setState({
			foodListVisible: filteredList,
			searchTerm: e.target.value,
		});
	};

	itemsList = () => {
		if (this.state.itemsList) {
			return this.state.itemsList.map((foodItem, i) => {
				return (
					<li key={i}>
						{foodItem.quantity} {foodItem.name} = {foodItem.calories}
					</li>
				);
			});
		}
	};

	addToGroceryList = (theName, theCalories, theQty) => {
		let newGroceryItem = {
			name: theName,
			calories: theCalories,
			quantity: theQty,
		};

		let groceryClone = this.state.itemsList ? [...this.state.itemsList] : [];

		let found = false;
		groceryClone.forEach((eachItem) => {
			if (eachItem.name === theName) {
				let caloriesPerUnit =
					Number(eachItem.calories) / Number(eachItem.quantity);
				eachItem.quantity = Number(eachItem.quantity) + Number(theQty);
				eachItem.calories = Number(eachItem.quantity) * Number(caloriesPerUnit);
				found = true;
			}
		});

		if (!found) {
			newGroceryItem.calories = Number(theCalories) * Number(theQty);
			groceryClone.unshift(newGroceryItem);
		}

		this.setState({ itemsList: groceryClone });
	};

	render() {
		return (
			<div className="container">
				<div className="left-side">
					<input
						className="input search"
						placeholder="Enter a Search Term"
						onChange={this.search}
						value={this.state.searchTerm}
					/>

					<button className="button btn is-success" onClick={this.toggleForm}>
						Add New Food
					</button>

					{this.state.formDisplay && (
						<form onSubmit={this.addNewFood} className="add-new-food-form">
							<legend>Name</legend>
							<input
								type="text"
								name="formName"
								value={this.state.formName}
								onChange={this.updateInput}
							/>
							<legend>Calories</legend>
							<input
								type="text"
								name="formCalories"
								value={this.state.formCalories}
								onChange={this.updateInput}
							/>
							<legend>Image</legend>
							<input
								type="text"
								name="formImage"
								value={this.state.formImage}
								onChange={this.updateInput}
							/>
							<button className="button btn is-success">Save</button>
						</form>
					)}

					{this.showFoodList()}
				</div>
				<div className="right-side">
					<h2 className="title is-2">Grocery List</h2>

					{this.itemsList()}
				</div>
			</div>
		);
	}
}
