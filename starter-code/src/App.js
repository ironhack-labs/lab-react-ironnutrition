import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/foodBox/FoodBox';
import FoodForm from './components/foodButton/FoodForm';
import SearchBar from './components/searchBar/SearchBar';
import FoodDetails from './components/foodDetails/FoodDetails';


class App extends Component {

  state = {
    foodList:foods,
    resumeList:[],
    totalCalories:0
  }

  handleFormSubmit = (newFood)=>{
    let allFoodsWithTheNewFood = [...this.state.foodList]

    allFoodsWithTheNewFood.push({
      name: newFood.name,
      calories: newFood.calories,
      image: newFood.image
    })

    let newState = {
      ...this.state,
      foodList: allFoodsWithTheNewFood
    }

    this.setState(newState)
  }

  searchFood = (searchName)=>{
    let newFoodList = [...foods]
    newFoodList = newFoodList.filter((food)=>{
      return food.name.toLowerCase().includes(searchName.toLowerCase())
    })
    this.setState({foodList:newFoodList})
  }

  addFoodToList = (quantity, props)=>{
    let newState = {...this.state}
    let encontrado = newState.resumeList.find( food => food.name === props.name )
    if(encontrado){
      encontrado.quantity += +quantity
      encontrado.calories += props.calories*+quantity
      newState.totalCalories += props.calories*+quantity
    }else{
      newState.resumeList.push({
        name:props.name,
        calories:props.calories,
        quantity:+quantity,
      })
      newState.totalCalories+= +props.calories
    }
    
    this.setState(newState)
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchFood={this.searchFood}/>
        <FoodDetails foodList={this.state.resumeList} totalCalories={this.state.totalCalories}></FoodDetails>
        <FoodForm handleFormSubmit={this.handleFormSubmit}/>
        {
          this.state.foodList.map((food, index)=>{
           return <FoodBox 
           key={index} name={food.name} image={food.image} calories={food.calories} 
           quantity={food.quantity} addFoodToList={this.addFoodToList}/>
          })
        }
      </div>
    );
  }
}

export default App;
