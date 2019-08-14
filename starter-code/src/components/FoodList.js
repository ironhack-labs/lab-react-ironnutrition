import React, { Component } from 'react'
import foods from '../foods.json'
import FoodBox from './FoodBox'
import FoodForm from './form'

class FoodList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			allFoods: foods
		}
	}

	addFood = food => {
		const foodsCopy = [...this.state.allFoods]
		foodsCopy.push(food)

		this.setState({
			allFoods: foodsCopy
		})
	}

	render() {
		console.log(this.addFood)
		return (
			<div>
				<FoodForm addFood={this.addFood} />
				{this.state.allFoods.map((elm, idx) => {
					return (
						<FoodBox key={idx} foodName={elm.name} foodCalories={elm.calories} foodImg={elm.image} foodQuantity={elm.quantity} />
					)
				})}
			</div>
		)
	}
}

export default FoodList
