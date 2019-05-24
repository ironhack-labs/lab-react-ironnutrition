import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import SearchFood from './components/SearchFood'

class App extends Component {
	state = {
		foods: [...foods],
		today: []
	}
	handleSearch = query => {
		this.setState({
			foods : foods.filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
		}) 
	}
	addFood = food => {
		this.setState({
			today: [...this.state.today, food]
		})
	}

	render() {
    return (
      <div className="App">
				<SearchFood search = {this.handleSearch}/>
				<div className="columns">
					<div className="column">
					{this.state.foods.map((e, i) => (
						<FoodBox key={i} food={e} add = {this.addFood}/>	
					))}
					</div>
					<div className="column">
						<h1>Today's foods</h1>
						{this.state.today.map((e, i) => (
							<p key={i}>{e.quantity} {e.name}, - {e.calories}cal</p>
						))}
					</div>
				</div>
      </div>
    );
  }
}

export default App;
