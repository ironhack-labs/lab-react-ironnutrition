import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import SearchFood from './components/SearchFood'

class App extends Component {
	state = {
		foods: [...foods]
	}
	handleSearch = query => this.state({
		foods : foods.filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
	}) 
	render() {
    return (
      <div className="App">
				<SearchFood />
        {this.state.foods.map((e, i) => (
					<FoodBox key={i} food={e} search = {this.handleSearch}/>	
				))}
      </div>
    );
  }
}

export default App;
