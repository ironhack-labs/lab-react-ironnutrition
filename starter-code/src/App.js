import React, { Component } from 'react';
import foods from './foods.json'
import './App.css';
import './index.css'
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm.js';
import 'bulma/css/bulma.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        list: foods,
        showPopup: false,
        listOfFoods:{},

    }
    
} 
  
  togglePopup = (food) => {  
  this.setState({  
       showPopup: !this.state.showPopup  
  }); 
  if(food.name !== undefined){
    this.addFood(food);
  } 
   }

   
  addFood = (food) => {
   let newFoods = [...this.state.list]
    newFoods.unshift(food) 
    this.setState({
    list: newFoods
         })
         console.log(this.state.list)
      }



showFood = () =>{
  return this.state.list.map((eachFood,i)=>{
      return(
      <FoodBox key={i} updateFoodList={this.updateFoodList} changeQuantity={this.changeTheQuantity} {...eachFood}/>
      )
  })
}

setSearch = (e) => {
  let filteredFoods = foods.filter(eachFood=>{
    return eachFood.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
  this.setState({ 
    list:filteredFoods
  })
}

updateFoodList = (foodBoxState) => {
  let newListOfFoods = {...this.state.listOfFoods}
  newListOfFoods[foodBoxState.name] = foodBoxState 
  this.setState({
    listOfFoods: newListOfFoods
  })
 
}

showTodaysFood = () => {
  let foods = this.state.listOfFoods
  let array = [] 
  let total = 0; 
  for(let key in foods) {
  total += Number(foods[key].quantity) * Number(foods[key].calories)
  
      array.push (
          <li key={key}>
            {key} = {Number(foods[key].quantity) * Number(foods[key].calories)} calories
          </li>
      )
  }

  return (
  <ul>
  <li>{array}</li>
  <li>Total: {total} cal</li>
  </ul>)
  
    
        
}


render() {

   return (
      <div className="app">
      <h1 className="title">IronNutrition</h1>
      <input type="text" className="input search-bar" name="search" placeholder="Search" onChange={this.setSearch}></input>
      <button className="button is-small is-success" onClick={this.togglePopup}>Add new Food </button>
      {this.state.showPopup ?  <AddFoodForm  closePopup={(food) => this.togglePopup(food)}/> 
         : null }  
     {this.showFood()}
     <div className="today-food-container">
     <h3 className="today-title">Today's foods</h3>
     {this.showTodaysFood()}

      </div>
    
      </div>
    );
  }

}
export default App;

