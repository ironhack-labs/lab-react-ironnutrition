import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';

export class App extends Component {
  state={
    foodsArrAll:foods,
    foodsArrFiltered:foods,
    todayCalories:[],
    showForm:'none'
  }

  addOneFood = foodObj =>{
    this.setState(prevState=>{
      return {foodsArrAll:[...prevState.foodsArrAll, foodObj]}
    })
  }

  searchFood = e =>{
    let newFoodsArr = this.state.foodsArrAll.filter(food=>food.name.includes(e.target.value))
    this.setState({foodsArrFiltered:newFoodsArr})
  }

  addTodaysFood = (foodObj) =>{
    if(foodObj.quantity>0){
      this.setState(prevState=>{
        let newTodayCalories
        if(prevState.todayCalories.some(foodState=>foodState.name===foodObj.name)){
          newTodayCalories = prevState.todayCalories.map(stateFood=>stateFood.name === foodObj.name ? {...stateFood, quantity:(Number(stateFood.quantity)+Number(foodObj.quantity))}: stateFood)
        } else{
          newTodayCalories = [...prevState.todayCalories, foodObj]
        }
        return {todayCalories: newTodayCalories}
      })
    }
  }

  showForm = () =>{
    let show = this.state.showForm === 'none'? 'block' : 'none'
    this.setState({showForm:show})
  }

  delete = (name) =>{
    let newTodayCalories = this.state.todayCalories.filter(food=>food.name !== name)
    this.setState({todayCalories:newTodayCalories})
  }

  render() {
  return (
    <div>
      <div>
        <h1>IronNutrition</h1>
        <button onClick={this.showForm}>Add food</button>
        <div style={{display:this.state.showForm}}>
          <AddFood addOneFood={this.addOneFood} />
        </div>
      </div>
      <div>
        <input type='text' onChange={this.searchFood} />
      </div>
    <div >
      {this.state.foodsArrFiltered.map((food, index)=>{
        return <FoodBox key={index} food={food} addTodaysFood={this.addTodaysFood} />
      })}
    </div>
    <div>
      <h2>Today's foods</h2>
      <div>
        {this.state.todayCalories.map(food=>{
          return <div>
          <p>{food.quantity}X{food.name}: {food.calories*food.quantity} calories</p>
          <button onClick={()=>this.delete(food.name)}>Delete</button>
          </div>
        })}
      </div>
      <p>Total: {this.state.todayCalories.reduce((acc, current)=> {return acc + (Number(current.calories)*Number(current.quantity))}, 0)} calories</p>

    </div>
    </div>
  );
}
}

export default App;
