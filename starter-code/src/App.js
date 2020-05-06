import React, { Component } from 'react'

import './App.css'
import foods from './foods.json'
import FoodBox from './component/foodbox/FoodBox'

class App extends Component {
	constructor() {
		super()
		this.myFood = [...foods]
		this.state = { food: this.myFood }
	}

	render() {
		return (
			<>
				{this.state.food.map((elm, idx) => (
					<FoodBox key={idx} {...elm} />
				))}
			</>
		)
	}
}

export default App
