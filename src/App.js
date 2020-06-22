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
      todaysCaloriesindex :[],
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
  delete = (event, name) =>{
    let todaysNameList = [...this.state.todaysFoodNames]
    let foodQuantity = [...this.state.todaysFoodQuantity]
    let calorieIndex = [...this.state.todaysCaloriesindex]
    let todaysCalories = this.state.todaysFoodCalories
    let index = todaysNameList.indexOf(name)
    let newCal = todaysCalories-(calorieIndex[index]*foodQuantity[index])
    todaysNameList.splice(index,1)
    foodQuantity.splice(index,1)
    this.setState({
      todaysFoodNames : todaysNameList,
      todaysFoodQuantity : foodQuantity,
      todaysFoodCalories : newCal
    })
      
  }
  addTodaysFood = (name, calories, number) =>{
    let todaysNameList = [...this.state.todaysFoodNames]
    let foodQuantity = [...this.state.todaysFoodQuantity]
    let calorieIndex = [...this.state.todaysCaloriesindex]
    let todaysCalories = this.state.todaysFoodCalories
    if(todaysNameList.includes(name)){
      let index = todaysNameList.indexOf(name)
      foodQuantity[index] += number
      calorieIndex[index] += calories
    }else{
      foodQuantity.push(number)
      todaysNameList.push(name)
      calorieIndex.push(calories)
    }
    
    todaysCalories += calories*number
    
    this.setState({
      todaysFoodNames : todaysNameList,
      todaysFoodCalories : todaysCalories,
      todaysFoodQuantity : foodQuantity,
      todaysCaloriesindex: calorieIndex
    })
    
    console.log("Food Today",this.state.todaysFoodCalories, this.state.todaysFoodNames, this.state.todaysFoodQuantity);
  }
  

  render() {
    console.log("App State",this.state);
    return (
      <div className="App">
        <SearchBar  
        search = {this.search}/>
        {this.state.addFoodBox ?  <AddFood addFood = {this.addFood}/> : <button className="add-button" onClick ={()=>this.addFoodForm()}>Add Food</button>}

        <div className = "main-content">
          <FoodList 
          foodList ={this.state.filteredList}
          addTodaysFood = {this.addTodaysFood}/>
          {this.state.todaysFoodCalories > 0? <TodaysFood delete = {this.delete} totalCal = {this.state.todaysFoodCalories} foodNames = {this.state.todaysFoodNames} quantity = {this.state.todaysFoodQuantity}/> : <h1></h1>}
        </div>
        <a hidden href="https://icons8.com/icon/85081/trash">Trash icon by Icons8</a>
      </div>
    );
  }
}


export default App;
