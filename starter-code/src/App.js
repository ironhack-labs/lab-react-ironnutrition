import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import AddNewFoods from './components/AddNewFoods';

class App extends Component {
	state = {
    foods: foods,
   
	};

	addFoodHandler = (theFood) => {
		const foodsCopy = [ ...this.state.foods];
		foodsCopy.push(theFood);
		this.setState({
		foods: foodsCopy
		});
  };
  
  searchingHandler = (mySearch) => {
    const foodsCopy = [...this.state.foods];
    let filtered = foodsCopy.filter(foodsFiltered => foodsFiltered.name.toLowerCase().includes(mySearch.search.toLowerCase()))
    this.setState({foods: filtered})   
  }




	render() {
    console.log(this.state.foods)


		return (
			<div className="App">
				<h1>IronNutrition</h1>
				<AddNewFoods addTheFood={this.addFoodHandler} />
				<Search mySearch={this.searchingHandler} />
				{this.state.foods.map((elem, index) => {
					return <FoodBox key={index} foods={elem} />;
				})}
			</div>
		);
	}
}

export default App;
