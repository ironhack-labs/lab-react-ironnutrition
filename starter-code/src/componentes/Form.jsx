import React, { Component } from 'react';
// import Button from './Button';

class Form extends Component {
	state = {
		name: '',
		img: '',
		calor: ''
	};

	changeName = (event) => {
		const newState = { ...this.state };
		(newState.name = event.target.value), this.setState(newState);
	};
	changeImg = (event) => {
		const newState = { ...this.state };
		(newState.img = event.target.value), this.setState(newState);
	};
	changeCalor = (event) => {
		const newState = { ...this.state };
		(newState.calor = event.target.value), this.setState(newState);
	};

	saveChanges = (event) => {
		event.preventDefault();
		this.props.onclick(this.state.name, this.state.img, this.state.calor);
	};

	render() {
		return (
			<form onSubmit={this.saveChanges} style={{ display: this.props.checkShow ? 'block' : 'none' }}>
				<input type="text" placeholder="Food's Name" name="name" onChange={(e) => this.changeName(e)} />
				<input type="text" placeholder="Food's Image" name="img" onChange={(e) => this.changeImg(e)} />
				<input type="text" placeholder="Food's Calories" name="calor" onChange={(e) => this.changeCalor(e)} />
				<input type="submit" value="Add Ingredient" />
			</form>
		);
	}
}

export default Form;
