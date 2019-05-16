import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods2 from './foods.json'
import FoodBox from './components/FoodBox/FoodBox'
import AddFood from './components/FoodBox/AddFood'
import SearchBar from './components/SearchBar/SearchBar'
import TodayFoods from './components/FoodForm/TodayFoods'
import 'bulma/css/bulma.css'
import FoodList from './components/FoodBox/FoodList';

class App extends Component {

	state={
		food:{
			name:"",
			calories:"",
			image:"",
			quantity:0
		},
		foods:foods2.slice(0,5)
	}

	addFood = (e)=> {
		const {food} = this.state;
		let field = e.target.name;
		food[field] = e.target.value
		this.setState({food})
	}

	handleSubmit = (e)=>{
		e.preventDefault();
		let {foods, food} = this.state;
		foods.push(food);
		food={
			name:"",
			calories:"",
			image:"",
			quantity:0
		};
		this.setState({food,foods})
	}

	searchFood = (e)=>{ // Help
		let {foods} = this.state;
		let word = e.target.value
		console.log(word)

		
		foods =  foods.filter(food => food.name.startsWith(word)  )
		if(foods.length) {
			this.setState({foods})
		}else{
			foods = foods2.slice(0,5)
			this.setState({foods})
		}
		console.log(foods)
		
		
		
		
		

	}

  render() {
		const {food,foods} = this.state

    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <SearchBar searchFood={this.searchFood} {...food}/>			
			<AddFood handleSubmit={this.handleSubmit} addFood={this.addFood} {...food} />
      <div className="columns">
				
			<FoodList foods={foods} />
    
			</div>
      </div>
    );
  }
}

export default App;
