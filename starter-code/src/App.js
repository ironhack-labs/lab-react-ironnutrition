import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import AddNewFoods from './components/AddNewFoods';

class App extends Component {
	state = {
		foods: foods
	};

	addFoodHandler = (theFood) => {
		const foodsCopy = [ ...this.state.foods ];
		foodsCopy.push(theFood);
		this.setState({
			foods: foodsCopy
		});
  };
  
  searchingHandler = (mySearch) => {
    const foodsCopy = [ ...this.state.foods ];
    if(foodsCopy.includes(mySearch.search)){
      foodsCopy.filter(theFood => theFood.search === foodsCopy.name)
    }
    this.setState({foods: foodsCopy})
  }

	render() {
		return (
			<div className="App">
				<h1>IronNutrition</h1>
				<AddNewFoods addTheFood={this.addFoodHandler} />
				<Search mySearch={this.searchingHandler} />
				{this.state.foods.map((elem, index) => {
					console.log(elem);
					return <FoodBox key={index} foods={elem} />;
				})}
			</div>
		);
	}
}

export default App;
