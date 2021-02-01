import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from "./foods.json";
import FoodBox from "./FoodBox"
import AddFood from "./AddFood"
 
class App extends React.Component {
  
  state = {
    foodList: foods,
    showForm: false,
    fileteredList: foods,
    totalCalorieFoods: [],
 }
 
 toggleForm = () => {
   this.setState({
     showForm: true
   })
 }
  
 handleAdd = (event) => {
    event.preventDefault()
    const {name, calories, image} = event.target
    // let name = event.target.name.value
    // let calories = event.target.calories.value
    // let image = event.target.image.value
 
    let newFood = {
      name: name.value,
      calories: calories.value,
      image: image.value,
      quantity: 0
    }
 
    this.setState({
      foodList: [newFood, ...this.state.foodList,],
      showForm: false,
    })
 }
 
 handleSearch = (event) => {
   let searchText = event.target.value
   let fileteredList = this.state.foodList.filter((food) =>{
     return food.name.toLowerCase().includes(searchText.toLowerCase())
     /*we could use startsWith instead of includes*/ 
   })
 
 
   this.setState({
     fileteredList
   })
 
 }
 
 handleAddCalories = (food, quantity) => {
    let myFood = {
      name: food.name,
      calories: food. calories,
      quantity: quantity
    }

    this.setState({
      totalCalorieFoods: [...this.state.totalCalorieFoods, myFood]
    })

 }

  render () {
 
    const {foodList, showForm, fileteredList} = this.state

    let totalCalories = this.state.totalCalorieFoods.reduce((acc, food) => {
      return acc + (food.calories * food.quantity)
    }, 0)
 
    return(
    <React.Fragment>

      <div class="columns">
        <div class="column">
            {
            showForm ? (
              <AddFood onAdd = {this.handleAdd}/>
            ) : (
              <button onClick={this.toggleForm}> Show Form</button>
            )
          }
    
          <input onChange={this.handleSearch} type="text" placeholder="Search"></input>
    
          {
            fileteredList.map((food,index) => {
              return (
              <FoodBox
                key = {index}
                singleFood = {food}
                onAdd={this.handleAddCalories}
              />
              )
            })
          }
        </div>
        <div class="column">
          Total calories
          <ul>
            {
                this.state.totalCalorieFoods.map((food)=>{
                return <li>{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
              })
            }
          </ul>
          <p>Total {totalCalories} cal</p>
        </div>
      </div>

    </React.Fragment>
 
  );
  }
}
 
export default App;