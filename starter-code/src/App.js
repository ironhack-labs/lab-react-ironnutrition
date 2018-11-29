import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './FoodBox';
import foods from './foods.json';
import FormFood from './FormFood';
import Search from './Search';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foods : foods,
      addForm : true, 
      foodSearch : [],
      todayFoods : [],
    }
  }

  addFormMethod(){
    const {addForm} = this.state;
    this.setState ({addForm : !addForm})
  }

  addNewFood(newFood){
    const{foods, addForm} = this.state
    foods.unshift(newFood);
    this.setState({foods})
    this.setState({addForm : !addForm})
  }

  searchFood(whatFood){
    const{foods} = this.state
    const foodSearch = [];
    foods.forEach((oneFood)=>{
     if(oneFood.name.toLowerCase().indexOf(whatFood.toLowerCase()) > -1) {
       foodSearch.push(oneFood)
     }
    })
      this.setState({foodSearch})
  }

  addTodayFood(newFood){
    const{todayFoods} = this.state
    todayFoods.unshift(newFood);
    this.setState({todayFoods})
  }


  render() {
    const {foods, foodSearch, addForm, todayFoods} = this.state;
    const foodHtml = 
    foods.map((oneFood)=>{
        return (
          <FoodBox addTodayFood={whatFood=>this.addTodayFood(whatFood)} name = {oneFood.name} calories = {oneFood.calories} image = {oneFood.image} quantity = {oneFood.quantity}/>
          )
        })
        
    const foodSearchHtml = 
    foodSearch.map((oneFood)=>{
      return (
        <FoodBox addTodayFood={whatFood=>this.addTodayFood(whatFood)} name = {oneFood.name} calories = {oneFood.calories} image = {oneFood.image} quantity = {oneFood.quantity}/>
      )
    })

    const todayFoodHtml = 
    todayFoods.map((oneFood)=>{
      return (
        <ul>
          <li>{oneFood.foodquantity} {oneFood.foodname} : {oneFood.foodcalories*oneFood.foodquantity} calories</li>
        </ul>
      )
    })

     const totalTodayFoodHtml = todayFoods.reduce(function(accumulator, current){
      return accumulator + current.foodquantity * current.foodcalories;
    }, 0);

    return (
      <div className="App ">

      {addForm ? <button onClick={()=>this.addFormMethod()}>Add new food</button> : <FormFood addNewFood={newFood=>this.addNewFood(newFood)}/>}

      <Search searchFood={whatFood=>this.searchFood(whatFood)}/>

      <div class="columns">
        <div class="column">
        {foodSearchHtml.length>0 ? foodSearchHtml : foodHtml}
        </div>
        <div class="column">
          <h2>Today's Foods</h2>
          {todayFoodHtml}
          <h3>Total : {totalTodayFoodHtml} calories</h3>
        </div>

      </div>

      </div>
    );
  }
}

export default App;
