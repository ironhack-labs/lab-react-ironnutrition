import React, { Component } from "react";
import foods from '../foods.json';
import { FoodBox } from './FoodBox';

export class ListFoodBox extends Component {
	constructor() {
		super();
		this.state = {
			foodBox: foods
		}
	}

	render() {
		return (
			<div>
				{this.state.foodBox.map((e,i) => <FoodBox key={i}  {...e}/>)}
			</div>
		)
	}
}