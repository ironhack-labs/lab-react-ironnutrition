import React, { Component } from 'react';


class FoodForm extends React.Component {

	state = {
		name: "",
		images: "",
		quantity: "",
		calories: "",
	}

	render() {

		return (

			<form>

			<div>
				<label forHTML="name"> Name: </label>
				<input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
			</div>

			<div>
				<label forHTML="qty"> Quantity: </label>
				<input type="number" value={this.state.quantity} name="qty" onChange={this.handleChange}/>
			</div>

			<div>
				<label forHTML="calories"> Calories: </label>
				<input type="number" value={this.state.calories} name="calories" onChange={this.handleChange}/>
			</div>

			<div>
				<label forHTML="images"> Images: </label>
				<input type="file" value={this.state.images} name="images" onChange={this.handleChange}/>
			</div>

			<button submit> Submit </button>

			</form>
		)
	};

}

export default FoodForm;