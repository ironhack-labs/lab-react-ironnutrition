import React, { Component } from 'react';
// import logo from './logo.svg';
import foods from './foods.json';
import FoodCard from './components/foodbox';
import FoodFrom from './components/foodform';
import SearchFood from './components/searchfood';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods:foods,
      searchResult:foods,
      formIsShowed:false,
      todayFoods:[],
      totalCal:0
    }
  }

  //show or hide the form function
  toggleForm = () => {
    this.setState({
      formIsShowed:!this.state.formIsShowed
    })
  }

  //add the new food in the foods array
  addFood = (food) => {
    this.setState({
      foods:[...this.state.foods,food],
      searchResult:[...this.state.searchResult,food]
    })
  }

  //search the food and show the results
  searchFood =(input) => {
    const results = this.state.foods.filter(f=>f.name.toLowerCase().includes(input.toLowerCase()))
    this.setState({
      searchResult:results
    })
  }

  //push into the today foods
  todayFoods =(f) => {
    //make a copy of the object 
    let food = {...f}
    //get the total cals
    const totalCal = [...this.state.todayFoods,food].reduce((aV,pV) => aV + pV.quantity*pV.calories,0 )
    //group te ingredients
    const todayFoodCopy = [...this.state.todayFoods];
    let index = todayFoodCopy.findIndex(f => f.name===food.name)
    index <0 ? todayFoodCopy.push(food) : todayFoodCopy[index].quantity +=food.quantity;
    this.setState({
      todayFoods:todayFoodCopy,
      totalCal:totalCal
    })
  }
  deleteTodayFood = (i) => {
    const todayFoodCopy = [...this.state.todayFoods];
    todayFoodCopy.splice(i,1);
    const totalCal = todayFoodCopy.reduce((aV,pV) => aV + pV.quantity*pV.calories,0 );
    this.setState({
      todayFoods:todayFoodCopy,
      totalCal:totalCal
    })
  }
  
  render() {
    return (
      <div className="App">
        <SearchFood result={this.searchFood} />
        <div className='lay-out'>
          <div>
            {this.state.searchResult.map((f,i) => <FoodCard key={i} {...f} addTodayFood={this.todayFoods}/>)}
          </div>
          <div>
            <h1>Food for Today</h1>
            {this.state.todayFoods.map((f,i)=>{
              return<div>
                      <p key={i}>{f.quantity}*{f.name}={f.quantity * f.calories}cal</p>
                      <button onClick={()=>this.deleteTodayFood(i)}>delete</button>
                    </div>
              })}
            
            <h3>Total {this.state.totalCal}cal</h3>
          </div>
        </div>


        <div className='add-form'>
          {!this.state.formIsShowed ? 
          <button className="button is-medium is-info" onClick={this.toggleForm}>Add Food</button> :
          <FoodFrom hideForm={this.toggleForm} addNewFood={this.addFood}/>}
        </div>
      </div>
    );
  }
}

export default App;
