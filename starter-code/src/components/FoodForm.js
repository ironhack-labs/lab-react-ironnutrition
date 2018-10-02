import React, { Component } from "react";
import '../formFood.css';


export class FoodForm extends Component {
	constructor() {
		super();
		this.state = {
			error: '',
			calories: '',
			image: '',
			name: '',
			quantity: ''
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		let { error, calories, image, name, quantity } = this.state;

		if(calories === '') return this.setState({error: 'Empty calories field'});
		if(image === '') return this.setState({error: 'Empty image field'});
		if(name === '') return this.setState({error: 'Empty name field'});
		if(quantity === '') return this.setState({error: 'Empty quantity field'});

		this.setState({	error: '', calories: '', image: '', name: '', quantity: '' });
		this.props.foodReady({calories, image, name, quantity});
	}

	render() {
		let { error, calories, image, name, quantity } = this.state;

		return (
			<form className="form-food">
				<div className="field">
					<label className="label">Name:</label>
					<input className="input" type="text" id="name" placeholder="Food name" value={name} onChange={(e) => this.setState({name:e.target.value})}/>
				</div>
				<div className="field">
					<label className="label">Image:</label>
					<input className="input" type="text" id="image" placeholder="Image Url" value={image} onChange={(e) => this.setState({image:e.target.value})}/>
				</div>
				<div className="field">
					<label className="label">Calories:</label>
					<input className="input" type="number" id="calories" placeholder="Calories" value={calories} onChange={(e) => this.setState({calories:e.target.value})}/>
				</div>
				<div className="field">
					<label className="label">Quantity:</label>
					<input className="input" type="number" id="quantity" placeholder="Quantity" value={quantity} onChange={(e) => this.setState({quantity:e.target.value})}/>
				</div>
				<p className="help is-danger">{error}</p>
				<div className="control">
					<button className="button is-medium is-info is-link" onClick={this.handleSubmit.bind(this)}>Save</button>
				</div>
			</form>
		)
	}
}