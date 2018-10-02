import React, { Component } from "react";
import '../formFood.css';


export class FormFood extends Component {
	constructor() {
		super();
		this.state = {

		}
	}

	handleChanges(e) {
		this.setState();
	}

	render() {
		return (
			<form className="form-food">
				<div className="field">
					<label className="label" for="name">Name:</label>
					<input className="input" type="text" id="name" placeholder="Food name"/>
				</div>
				<div className="field">
					<label className="label" for="image">Image:</label>
					<input className="input" type="text" id="image" placeholder="Image Url"/>
				</div>
				<div className="field">
					<label className="label" for="calories">Calories:</label>
					<input className="input" type="number" id="calories" placeholder="Calories"/>
				</div>
				<div className="field">
					<label className="label" for="quantity">Quantity:</label>
					<input className="input" type="number" id="quantity" placeholder="Quantity"/>
				</div>
				<div className="control">
					<button className="button is-medium is-info is-link">Save</button>
				</div>
			</form>
		)
	}
}