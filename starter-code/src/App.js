import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import food from "./foods.json"
import FoodBox from "./FoodBox"
import Form from "./Form"
import Search from "./Search"
import TodaysFoods from "./TodaysFoods"



class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      food: food,
      form: false,
      formFood: {
        name: "",
        calories: "",
        image: ""
      },
      dailyMenu: []
    }
  }
 


  // On Change Event Handler
    userInput = (e) => {
    let {name, value} = e.target
    let formFood = this.state.formFood
    formFood[name] = value
  
    this.setState({formFood})
    }

  // Toggle Form
  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }


  // Add Dish on Submit
    addDish = (e) => {
    e.preventDefault();
      
    let foodCopy = [...this.state.food]
    foodCopy.push(this.state.formFood)
    
    this.setState({
      food: foodCopy,
      formFood: {
          name: "",
          calories: "",
          image: ""
        },
    })
    
    this.toggleForm()
    
    }

  // Search Handler
    searchHandler = (e) => { 
    let filtered = [...food].filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    
    this.setState({
       food: filtered
    })
    
   }

  // Add Dish to Todays Foods
   addToMenu = (e) => {

   let dailyMenuCopy = [...this.state.dailyMenu] // initially empty array

   let selectedEl = food.filter(item => item.name === e.target.value)[0] // eg. Pizza Object {name: "pizza", calories: 3000}

   let doesItemExist = dailyMenuCopy.filter(item => item.name === selectedEl.name) // is object inside array?

   if (doesItemExist.length === 0) {
     selectedEl.quantity = 1
     dailyMenuCopy.push(selectedEl)
   } else {
    dailyMenuCopy[dailyMenuCopy.indexOf(doesItemExist[0])].quantity += 1
   }


  this.setState({
    dailyMenu: dailyMenuCopy
  })

}

  // Delete Item from Daily Dish
  deleteDailyItem = e => {

    let dailyMenuCopy = [...this.state.dailyMenu]
    let selectedEl = food.filter(item => item.name === e.target.value)
    let reduceCal = dailyMenuCopy[dailyMenuCopy.indexOf(selectedEl[0])].quantity--

    if (reduceCal - 1 === 0) {dailyMenuCopy.splice(dailyMenuCopy.indexOf(selectedEl[0]),1)}

    this.setState({
      dailyMenu: dailyMenuCopy
    })
    

  }

   render(){

    return <div>
    {/* Search */}
    <Search searchHandler={this.searchHandler}/>
    <br />

    {/* Add Dish Form */}
    <button onClick={() => {this.toggleForm()}}>Add dish</button>
    <br />
    {this.state.form ? <Form onChange={this.userInput} onSubmit={this.addDish}/> : ""}

    {/* Today's foods*/}
    <TodaysFoods selectedFood = {this.state.dailyMenu} deleteHandler={this.deleteDailyItem}/>

    {/* Food Boxes*/} <br/>
    {this.state.food.map((el,idx) => {return <FoodBox {...el} key={idx} addToMenu={this.addToMenu}/>})}
    </div>
    
   }
}

export default App;
