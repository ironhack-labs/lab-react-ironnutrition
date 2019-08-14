import React, { Component } from 'react'
import foods from '../foods.json'
import FoodBox from './FoodBox'

class FoodForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			calories: '',
			image: '',
			quantity: ''
		}
	}
	handleFormSubmit = e => {
		e.preventDefault()
		console.log('entro en submit')
		console.log(this.props)
		this.props.addFood(this.state)

		this.setState({
			name: '',
			calories: '',
			image: '',
			quantity: ''
		})
	}
	handleInputChange = e => {
		console.log('entro en change')
		let { name, value } = e.target
		this.setState({ [name]: value })
	}
	render() {
		return (
			<section>
				<form onSubmit={this.handleFormSubmit}>
					<label>
						Nombre
						<input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} />
						<br />
					</label>
					<label>
						Cal
						<input type='text' name='calories' value={this.state.calories} onChange={this.handleInputChange} />
						<br />
					</label>
					<label>
						Image
						<input type='text' name='image' checked={this.state.image} onChange={this.handleInputChange} />
						<br />
					</label>
					<label>
						Qty:
						<input type='number' name='quantity' value={this.state.quantity} onChange={this.handleInputChange} />
						<br />
					</label>
					<input type='submit' value='Add Food' />
				</form>
			</section>
		)
	}
}
export default FoodForm
