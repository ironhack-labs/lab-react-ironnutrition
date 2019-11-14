import React, { Component } from 'react';
import foods from './foods.json'
import './App.css';
import './index.css'
import FoodBox from './FoodBox';
import Form from './Form.js';
import 'bulma/css/bulma.css';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        list: foods,
        showPopup: false,
        search: '',
        listOfFoods:{}
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
    console.log(newFoods)
    this.setState({
    list: newFoods
         })
         console.log(this.state, this.props)
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
    'search': e.target.value,  
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
            name: {key} 
            -
            calories: {Number(foods[key].quantity) * Number(foods[key].calories)}
          </li>
      )
  }
  return <ul>TOTAL is {total}!!!!<br></br> {array}</ul>
}


render() {

   return (
      <div>
      <h1 className="title">IronNutrition</h1>
      <input type="text" className="input search-bar" name="search" placeholder="Search" onChange={this.setSearch}></input>
      <button onClick={this.togglePopup}>Add new Food </button>
      {this.state.showPopup ?  <Form  closePopup={(food) => this.togglePopup(food)}/> 
         : null }  
     {this.showFood()}
     <div className="today-food-container">
       <h2>Today's foods</h2>
       {this.showTodaysFood()}
      </div>
    
      </div>
    );
  }

}
export default App;

