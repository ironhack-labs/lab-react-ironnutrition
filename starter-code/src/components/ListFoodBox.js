import React, { Component } from "react";
import foods from '../foods.json';
import { FoodBox } from './FoodBox';
import { FoodForm } from './FoodForm';

export class ListFoodBox extends Component {
	constructor() {
		super();
		this.state = {
			showForm: false,
			foodBoxes: foods
		}
	}

	addFood(food) {
		this.state.foodBoxes.unshift(food);
		console.log(this.state.foodBoxes);
		this.setState({foodBoxes:this.state.foodBoxes})
	}

	toggleForm() {
		this.setState({showForm: !this.state.showForm});
	}

	render() {
		return (
			<div>
				<section className="form-food-wrap">
					<div className="toggle-form">
						<button className="button is-medium is-info is-outlined" onClick={() => this.toggleForm()}>Add Food +</button>
					</div>
					{this.state.showForm && <FoodForm foodReady={food => this.addFood(food)}/> }
					
				</section>
				<section>
					<div className="columns">
						<div className="column">
							{this.state.foodBoxes.map((e,i) => <FoodBox key={i}  {...e}/>)}
						</div>
						<div className="column">
							<div className="content todays-food">
								<h2 className="subtitle">Today's foods</h2>
								<ul>
									<li>1 Pizza = 400 cal</li>
									<li>2 Salad = 300 cal</li>
								</ul>
								<strong>Total: 700 cal</strong>
							</div>
						</div>
					</div>
				</section>
				
			</div>
		)
	}
}