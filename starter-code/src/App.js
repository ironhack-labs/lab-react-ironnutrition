import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';
import FoodBox from './FoodBox.js'
import AddFood from './AddFood.js'
import ShowAddFood from './ShowAddFood.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      willAdd : false,
      allFood: foods,
      updatedFood : foods,
      search: '',
      todaysFood: [],
      todaysFoodCaloriesTotal: 0
    }
  }
  showForm() {
    this.setState({
      willAdd: true,
    })
  }
  hideFormAndAddFood=(food) => {
    const foodCopy = [...this.state.updatedFood];
    const collection = [...this.state.allFood];
    foodCopy.push(food);
    collection.push(food);
    
    this.setState({
      willAdd: false,
      updatedFood : foodCopy,
      allFood: collection,
    })
  }
  handleSearchChange(event){
    const filtered = this.state.allFood.filter(food => food.name.toLowerCase().includes(event.target.value.toLowerCase()))
    this.setState({
      updatedFood: filtered,
      search: event.target.value
    })
  }

  addToTodaysFood=(i)=>{
    const newArrayFood = this.state.updatedFood.slice(i,i+1)
    const newFood = newArrayFood[0]
    const newTodaysFood = [...this.state.todaysFood, newFood]
    var newCalories = 0
    newTodaysFood.forEach((foodObject) => { newCalories+(foodObject.quantity*foodObject.calories)})
    
    this.setState({
      todaysFood: newTodaysFood,
      todaysFoodCaloriesTotal: newCalories
    })
  }

  updateQuantity(event, index){
    var newQuantity = event.target.value;
    if(newQuantity<=0){
      newQuantity = 0
    }
    const newArrayObject = this.state.updatedFood.slice(index,index+1)
    const newObject = newArrayObject[0]
    newObject.quantity = newQuantity;
    this.state.todaysFoodCaloriesTotal 
    const arrayCopy = [...this.state.updatedFood]
    arrayCopy.splice(index, 1, newObject)
    this.setState({
      updatedFood: arrayCopy
    })
  }
  render() {
    let button
    if (this.state.willAdd)
      button = <AddFood onClick={(food)=> {this.hideFormAndAddFood(food)}}/>
    else 
      button = <ShowAddFood onClick={()=>{this.showForm()}}/>
    return (
      <div className="App">
      <h1>IronNutrition</h1>
      {button}
      <label>
        Search:
        <input type="text" name="search" value={this.state.search} onChange={(event)=> {this.handleSearchChange(event)}} />
      </label>
      <div className="allFood">
        {this.state.updatedFood.map((food,i) => {
          return(
          <FoodBox 
          image={food.image} 
          name={food.name} 
          calories={food.calories} 
          quantity={food.quantity}
          key={i}
          keyProps={i}
          onClick={(i)=>{this.addToTodaysFood(i)}}
          updateQuantity={(event, index)=>{this.updateQuantity(event,index)}}
          />)
          })}
        </div>
        <div className="todaysFood">
          <h1>Today's foods</h1>
          <ul>
            {this.state.todaysFood.map((food)=>{
              return(
                <li>{food.quantity} {food.name} = {food.quantity*food.calories}</li>
              )
            })}
          </ul>
          <h2>Total calories: {this.state.todaysFoodCaloriesTotal}</h2>
        </div>
      </div>

    );
  }
}

// updateQuantity={this.updateQuantity.bind(this)}
//           addFood={this.addFood.bind(this)}

export default App;
