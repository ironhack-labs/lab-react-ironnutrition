import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox'
import foodsjson from './foods.json'

class App extends Component {
  constructor(){
    super()
    this.addFood = this.addFood.bind(this)
  }

  state = {
    foods:foodsjson,
    addedfoods: [],
    f:foodsjson,
    cal: 0
  }

  filterFoods = (e) => {
    let foods = foodsjson.filter(food=>{
      return food.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      foods:foods
    })
  }

  countCalories = (arr) => {
    let calories = 0
    arr.forEach(food=>{
      calories += (food.calories * food.amount)
    })
    return calories
  }

  // groupItemsTogether = (arr) => {
  //   let arr2 = []
  //   for (let food of arr){
  //     for (let thing of arr2) {




  //     }
  //   }
  // }

  addFood = (i, amount) => {
    let foodlist = [...this.state.addedfoods]
    let newfood = Object.assign({}, this.state.f[i])
    newfood.amount = amount
    // newfood.forEach(food=>{
    //   if (food.name === this.state.f[i].name){
    //     food.amount += this.state.f[i].amount
    //   }
    // })
    let count = 0
    foodlist.forEach(food=>{
      if (food.name === newfood.name) {
        food.amount = Number(food.amount) + Number(newfood.amount)
        count++
      }
    })
    if (count === 0){
      foodlist.push(newfood)
    }
    count = 0
    let calories = this.countCalories(foodlist)
    this.setState({
      addedfoods:foodlist,
      cal:calories
    })
  }


  render() {
    return (
      <div className="App">
        <input className='search-input' type="text" onChange={this.filterFoods} placeholder='Search Food'/>
        <div className='food-container'>
          <div className='food-list'>
            {this.state.foods.map((food, index) => (
              <FoodBox 
                key={index}
                index={index}
                name={food.name}
                calories={food.calories}
                image={food.image}
                addFood={this.addFood}
                amount={1}
              />
            ))}
          </div>
          <div className='todays-foods'>
              <h2>Today's Foods</h2>
              {this.state.addedfoods.map(food=>(
                <h3>{food.amount}x {food.name} = {food.calories * food.amount} cal</h3>
              ))}
              <h4>Total calories: {this.state.cal}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;