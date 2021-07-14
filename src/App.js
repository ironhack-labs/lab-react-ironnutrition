import React, {Component} from 'react';
import './App.css';
import foodsJson from './foods.json';
import Food from './components/Food';
import Search from './components/Search';
import { render } from '@testing-library/react';
import TodaysFoods from './components/TodaysFoods'



class App extends Component{

  state = {
    foods: foodsJson,
    filteredFoods: foodsJson,
    total: [],
  };

  handleAddNewFood = (newFood) => {
    this.setState({
      foods: [newFood, ...this.state.foods]
    })
  };

  handleSearch = (event) => {
    let searchedFood = event.target.value;
    const {foods} = this.state;
    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedFood.toLowerCase())
    })

    this.setState({
      filteredFoods: filteredFoods
    })
  }

  handleAddTotal = (event, food) => {
    event.preventDefault();

    let foodObj = {
      name: food.name,
      image: food.image,
      quantity: Number(event.target.quantity.value),
      calories: food.calories
    }
    
    let foundDuplicate = false;
    const noDuplicatesList = this.state.total.map((existing) => {
      if (existing.name.toLowerCase()  === foodObj.name.toLowerCase()){
        foundDuplicate = true;
        existing.quantity += foodObj.quantity
        return existing;
      }else{
        return existing;
      }
    })

    if(foundDuplicate){
      this.setState({
        total: noDuplicatesList
      })
    }else{
      this.setState({
        total: [foodObj, ...this.state.total]
      })
    }
    console.log(this.state.total)

  }

  render(){
    return (
      <div>
            <div class="container">
              <div>
                {/* Search bar */}
              </div>
              <div class="columns">
                <div class="column">
                  <Search onSearch = {this.handleSearch}/>
                  <Food 
                    foods = {this.state.filteredFoods}
                    onAddNewFood = {this.handleAddNewFood}
                    handleAddTotal = {this.handleAddTotal}
                  />
                </div>
                <div class="column content">
                  <TodaysFoods foods = {this.state.total}/>
                </div>
              </div>
      </div>
  
        
      </div>
    );
  









  }


}

export default App;
