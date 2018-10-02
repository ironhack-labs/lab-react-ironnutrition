import React, { Component } from "react";
import foods from '../foods.json';
import { FoodBox } from './FoodBox';
import { FoodForm } from './FoodForm';

export class ListFoodBox extends Component {
	constructor() {
		super();
		this.state = {
			foodBoxes: foods
		}
	}

	addFood(food) {
		this.state.foodBoxes.unshift(food);
		console.log(this.state.foodBoxes);
		this.setState({foodBoxes:this.state.foodBoxes})
	}

	render() {
		return (
			<div>
				<FoodForm foodReady={food => this.addFood(food)}/>
				{this.state.foodBoxes.map((e,i) => <FoodBox key={i}  {...e}/>)}
			</div>
		)
	}
}