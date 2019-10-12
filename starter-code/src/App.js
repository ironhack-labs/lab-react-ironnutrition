import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json'


import FoodBox from "./components/foodbox.js"
import Search from "./components/search.js"
import FormAdd from "./components/formadd.js"

class App extends Component {

  state = {
    foods: foods,
    allFoods: foods,
    formopen: false,
    selFood:[]
    
    
  }

  toggleForm = () => {
    this.setState({
      formopen: !this.state.formopen
    });
  }

  addFood =  (food) => {
   
    let newFoodList = [...this.state.allFoods]
    newFoodList.push(food)
    
    this.setState({
      allFoods:newFoodList,
      foods:this.state.allFoods
    })
    // carefull setstate is asyn. is now doing its thing updating view. so the below will not work
    //alert('add cnt2: '+this.state.allFoods.length);
    this.toggleForm();

  }

  
  appAddItem=(index)=>{
  
   let temp=[...this.state.selFood];
   if (!temp.includes(this.state.allFoods[index]))
      temp.push(this.state.allFoods[index]);
   this.setState(
    {selFood:temp}
   )


  
  
  }

  appSearch=(e)=>{
    if (e.target.value.length>0) {
        let filter = this.state.allFoods.filter((item)=>{
          return item.name.toLowerCase().includes(e.target.value.toLowerCase())
          })

          this.setState({
            foods: filter
          })

        }
        else
        {
          
          this.setState({
            foods: this.state.allFoods
          })
        }
  }

  appUpdateItem=(e)=>{
    // trick to handle index using the e.targetsending.name aMethodUpdate={this.appUpdateItem} 
    // another way was implement in appAddItem  sending body function to child aMethodAdd={ ()=>this.appAddItem(index)
    let temp=[...this.state.foods];
    let qty=Number(e.target.value);
    if (-1==qty) qty=0;
    temp[e.target.name].quantity=qty;
    this.setState(
      {foods:temp}
    )
    
    
  }

  
  
  

  countCal = () => {
   
    const calories = this.state.selFood.reduce((sum, food) => {
      return sum + food.calories*food.quantity;
    }, 0);
    return calories

  }


  render() {
      
       //two ways to do the same here. i want to know the index of food when calling function
      // 1) in .appUpdateItem i use the trick of the id={index} to assign to name in child and then back here use e.target.name
      // 2) in addItem we will use a better approach: send the method call with index => this.appUpdateItem(index)

    let foodItems=this.state.foods.map((item, index) => {
      return <FoodBox key={index} id={index} {...item} aMethodUpdate={this.appUpdateItem} aMethodAdd={ ()=>this.appAddItem(index) }/>
    })
    
    let selItems=this.state.selFood.map((item, index) => {
      return <li key={index}>{item.quantity} {item.name} = {item.calories} cal</li>
    })

    let totalCal=this.countCal();


    return (
      <div className="App">
        

        <div class="container">
      <h1 class="title">IronNutrition</h1>

      <Search aMethodSearch={this.appSearch} />
     
        <button onClick={this.toggleForm} >Add Food</button>
        <FormAdd show={this.state.formopen} methodAdd={this.addFood} />
        


      <div class="columns">
         <div class="column">
         {foodItems}
         </div>

        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            {selItems}
            
          </ul>
          <strong>Total: {totalCal} cal</strong>
        </div>
      </div>
    </div>




      </div>
    );
  }
}

export default App;
