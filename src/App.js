import React from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css'
import FoodBox from './components/foodbox/FoodBox'
import Search from './components/search/Search'
import AddFood from './components/addfood/AddFood'
import FoodList from './components/foodlist/FoodList'

class App extends React.Component {

  state = { 
    foods: foods,
    searchFoods: foods,
    showForm: false,
    search: '',
    foodList: [],
    totalCalories:0,
  }

  handleForm = () => {
    this.setState({showForm: !this.state.showForm});
  }



  createFood = (newFood) => {
    console.log(newFood)
    const newFoods = [newFood, ...this.state.foods];

    this.setState({foods: newFoods, searchFoods:newFoods})

  }


  handleSearchResults = (search) =>{

    const searchFoods = [...this.state.foods]
    const lowerCaseSearch = search.toLowerCase()

    const searchResults = searchFoods.filter((food) => {

        const foodName = food.name.toLowerCase()

        if(foodName.startsWith(lowerCaseSearch)){
          return true;
        }else{
          return false;
        }
    })

    this.setState({ searchFoods: searchResults})
  }

  handleAddList = (foodObj, quantity) =>{
    
    if(quantity === 0){
      return
    }
    
    const food = {...foodObj}
    const foodList = [...this.state.foodList]

    let quantityFound = 0;
    let totalCalories = this.state.totalCalories

    foodList.forEach((foodItem, index) => {
      if(foodItem.name === food.name){

          quantityFound =  foodItem.quantity
          foodList.splice(index, 1)
          totalCalories -= foodItem.calories

      }
    })
    
    food.quantity = Number(quantity) + Number(quantityFound);
    food.calories = food.calories*food.quantity

    totalCalories += food.calories

    console.log(food.calories, Number(quantity), this.state.totalCalories)

    const newFoodList = [...foodList, food]

    this.setState({
              foodList: newFoodList, 
              totalCalories: totalCalories
    })

      
  }

  handleDeleteFromList = (foodObj) =>{

    const newFoodList = [...this.state.foodList];

    const filteredFoodList = newFoodList.filter((foodItem)=>{
      if(foodItem.name === foodObj.name){
        return false;
      }else{
        return true
      }
    })
    const totalCalories = this.state.totalCalories - foodObj.calories

    this.setState({foodList: filteredFoodList, totalCalories:totalCalories})

  }

  

  render(){
  return (

    <div className="App">

        <h1 className="title">IronNutrition </h1>
        <Search handleSearchResults = {this.handleSearchResults}/>

      <button className="add-food button is-info" onClick={this.handleForm}>Add New Food</button>


  <div class="columns">
     <div className="column">

      
      {this.state.showForm 
      
      ? ( <AddFood createFood={this.createFood} handleForm={this.handleForm} />) 
      
      : null}
        
      {this.state.searchFoods.map((oneFoodItem) => {

       return  <FoodBox 
       food = {oneFoodItem}
       handleAddList = {this.handleAddList}
       />

      })}
     </div>

     <div className="column">
       <h2 className = "subtitle is-3">Today's foods</h2>
       {
         this.state.foodList.map((foodItem) => {
          return (
            
            <FoodList 
            food = {foodItem} 
            handleDeleteFromList = {this.handleDeleteFromList}  
            />
            
            )
         })
       }
       <p>Total Calories: {this.state.totalCalories}</p>
     </div>

</div>
    </div>
  );
    }
}

export default App;
