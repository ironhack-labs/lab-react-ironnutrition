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
    formopen: false
    
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
    

  }

  
  appAddItem=()=>{
  
    
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
    let updated={...this.state.foods[e.target.name]}
    let qty=Number(e.target.value);
    if (-1==qty) qty=0;

    updated.quantity=qty;
    this.state.foods[e.target.name]=updated;
    this.setState(
      {foods:foods}
    )
    
    
  }

  addItemToParent= (food) => {
  
    let foodlist = {...this.state.todayFoods}
    foodlist.push(food);
 
    this.setState({
      todayFoods: foodlist
    })
  }
  
  showList = () => {
   return this.state.todayFoods.map( (item, i) => {
    return  <ul key={i}>
      <li>item.name}</li>
      <li>{item.calories}</li>
      <li>{item.quantity}</li>
    </ul>
   });
  }

  countCal = () => {
    const calories = this.state.todayFoods.reduce((sum, food) => {
      return sum + food.calories;
    }, 0);
    return calories

  }


  render() {

    let foodItems=this.state.foods.map((item, index) => {
      return <FoodBox key={index} id={index} {...item} aMethodUpdate={this.appUpdateItem} aMethodAdd={this.appAddItem}/>
    })


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

      )} 
         
          
         </div>

        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </div>
    </div>




      </div>
    );
  }
}

export default App;
