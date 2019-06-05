import React, { Component } from 'react';

class AddNewFood extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			calories: 0,
			image: ''
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addFood(this.state);
		this.props.showForm();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name
					<input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
				</label>
				<label>
					Calories
					<input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
				</label>
				<label>
					Image URL
					<input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
				</label>
				<button>Enviar</button>
			</form>
		);
	}
}

export default AddNewFood;
