import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodList from "./components/FoodList";
import SearchBar from './components/SearchBar'
import foods from './foods.json'
import AddFood from './components/AddFood'
import TodaysFood from './components/TodaysFood';

class App extends Component {
  constructor(props){
    super(props)
    this.search = this.search.bind(this);
    this.addFood = this.addFood.bind(this);
    this.addTodaysFood = this.addTodaysFood.bind(this);
    

    this.state ={
      foodList: foods,
      filteredList : foods,
      addFoodBox : false,
      todaysFoodNames : [],
      todaysFoodQuantity : [],
      todaysFoodCalories : 0
  }
  }

  search = e =>{
    const result = this.state.foodList.filter(food =>{
      return food.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filter: true,
      filteredList: result
    })
    console.log("result", result);
    console.log(this.state.filteredList);
  }
  addFoodForm = () =>{
    console.log("Lallaa",this.state);
    this.setState({
      addFoodBox : true
    })
  }
  addFood = (array) =>{
    let newState = [...this.state.foodList]
    newState.push(array)
    this.setState({
      filteredList : newState,
      addFoodBox: false
    })
  }
  addTodaysFood = (name, calories, number) =>{
    let todaysNameList = [...this.state.todaysFoodNames]
    let foodQuantity = [...this.state.todaysFoodQuantity]
    let todaysCalories = this.state.todaysFoodCalories
    if(todaysNameList.includes(name)){
      let index = todaysNameList.indexOf(name)
      foodQuantity[index] += number

    }else{
      foodQuantity.push(number)
      todaysNameList.push(name)
    }
    
    todaysCalories += calories*number
    
    this.setState({
      todaysFoodNames : todaysNameList,
      todaysFoodCalories : todaysCalories,
      todaysFoodQuantity : foodQuantity
    })
    
    console.log("SOOOOOOOOOOO",this.state.todaysFoodCalories, this.state.todaysFoodNames);
  }
  

  render() {
    console.log("App State",this.state);
    return (
      <div className="App">
        <SearchBar  
        search = {this.search}/>
        {this.state.addFoodBox ?  <AddFood addFood = {this.addFood}/> : <button onClick ={()=>this.addFoodForm()}>Add Food</button>}

        <div className = "main-content">
          <FoodList 
          foodList ={this.state.filteredList}
          addTodaysFood = {this.addTodaysFood}/>
          {this.state.todaysFoodCalories > 0? <TodaysFood totalCal = {this.state.todaysFoodCalories} foodNames = {this.state.todaysFoodNames} quantity = {this.state.todaysFoodQuantity}/> : <h1>Add Food</h1>}
        </div>
      </div>
    );
  }
}


export default App;
