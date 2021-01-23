import {Component, React} from 'react';

class AddNewFood extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			name: '',
			calories: '',
			image: '',
			showForm: false
		};
	}

	showForm = () => {
		return (
			<div>
				<form
					onSubmit={this.handleFormSubmit}>
					<label htmlFor="name">Foodname:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={this.state.name}
						onChange={event => this.handleInputChange(event)}/>

					<label htmlFor="calories">Calories:</label>
					<input
						type="text"
						id="calories"
						name="calories"
						value={this.state.calories}
						onChange={event => this.handleInputChange(event)}/>

					<label htmlFor="image">Image:</label>
					<input type="file"
						   id="image"
						   name="file"
						   onChange={event => this.handleInputFile(event)}/>

					<button type="submit">Add new Food</button>
				</form>
			</div>
		);
	};

	handleInputFile = event => {
		const image = event.target.files[0];

		this.setState({
			image: image
		});
	};

	handleInputChange = event => {

		const {name, value} = event.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();

		this.props.submitToAdd({
			id: 123,
			name: this.state.name,
			calories: this.state.calories,
			image: this.state.image
		});

		this.setState({
			name: '',
			calories: '',
			image: '',
			showForm: false
		});
	};


	render() {
		return (
			<div>
				<button onClick={() => this.setState({showForm: true})}>Add new Food</button>
				{this.state.showForm ? this.showForm() : null}
			</div>
		);
	}
}

export default AddNewFood;