import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import TodaysFood from './components/TodaysFood'


class App extends Component {

  state = {
    foods:foods,
    showForm:false,
    searchBarText:'',
    todaysFoodArray:[]
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
      
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    let newFood = { 
      name: this.state.name, 
      calories: this.state.calories, 
      image:this.state.image,
      quantity:0
    }
    let foodCopy = [...this.state.foods]
    foodCopy.push(newFood)
    this.setState({
      foods:foodCopy
    })
    this.toggleForm()
  }

  handleChangeQuant = event =>{
    let foodArrayCopy = this.state.foods.map(e => {return {...e}})
    let index = foodArrayCopy.findIndex(food => food.name===event.target.name)
    foodArrayCopy[index].quantity = Number(event.target.value)

    this.setState({
      foods:foodArrayCopy
    })

  }

  addTodaysFood = (event) => {
    let index = this.state.foods.findIndex(food => food.name===event.target.value)
    let todaysFoodArrayCopy = this.state.todaysFoodArray.map(e => {return {...e}})

    if(!todaysFoodArrayCopy.some(fooditem =>fooditem.name == event.target.value)){  
        todaysFoodArrayCopy.push(this.state.foods[index])}

    else{
      let newIndex = todaysFoodArrayCopy.findIndex(food => food.name===event.target.value)
      todaysFoodArrayCopy[newIndex].quantity+=this.state.foods[index].quantity
    }    

    this.setState({
      todaysFoodArray:todaysFoodArrayCopy
    })
  }

  removeItem = event =>{
    let todaysFoodArrayCopy = this.state.todaysFoodArray.map(e => {return {...e}})
    let index = todaysFoodArrayCopy.findIndex(food => food.name===event.target.value)
    todaysFoodArrayCopy.splice(index,1)
    this.setState({
      todaysFoodArray:todaysFoodArrayCopy
    })
  }

  
  render(){
    return (
      <div className='columns'>
      <div className='column'>
      <form>
        <input type="text" placeholder="Search..." name="searchBarText" onChange={this.handleChange}/>
      </form>
      <FoodBox addTodaysFood={this.addTodaysFood} handleChangeQuant={this.handleChangeQuant} searchBarText={this.state.searchBarText} foods={this.state.foods}/>
      <button onClick={this.toggleForm}>Add New Food</button>
      {this.state.showForm ? 
      <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} placeholder="name" name="name" type="text" />
            <input onChange={this.handleChange} placeholder="calories" name="calories" type="text" />
            <input onChange={this.handleChange} placeholder="image" name="image" type="text" />

            <input type="submit" />
          </form>
       : ''}
       </div>
       <div className='column'>   
       <TodaysFood removeItem={this.removeItem} todaysFoodArray={this.state.todaysFoodArray}/>
       </div>
      </div>
    );
  }
}


export default App;


