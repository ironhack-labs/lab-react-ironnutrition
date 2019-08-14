import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import FoodList from './components/FoodList'
import FoodForm from './components/form'
import logo from './logo.svg'
import './App.css'
import AddFood from './components/form'

class App extends Component {
	render() {
		return (
			<div>
				<FoodList />
			</div>
		)

		// <AddForm/>
	}
}

export default App
