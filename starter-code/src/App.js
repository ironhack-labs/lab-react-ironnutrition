import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'

class App extends Component {

   

  state = {
    search: '',
    modalActive: false,
    name: "name",
    image: "image",
    calories: "calories",
    quantity: "quantity",
    foods: foods,
    foodsOfToday: [],
    total: 0
  }

  handleChange = (event) => {
    this.setState({search: event.target.value}) 
  }

  toggleModal= () => {
    this.setState({modalActive: !this.state.modalActive})
  }

  handleAdd = (event) => {

    var newFoodAttr = {}
    var keyName = event.target.name
    var inputFieldValue = event.target.value
    newFoodAttr[keyName] = inputFieldValue
    this.setState(newFoodAttr)
  }

  addFoodsToday = (foodObject) => {
    var currentToday = this.state.foodsOfToday
    currentToday.push(foodObject)
    
    var subtotal = this.state.total

    this.setState({foodsOfToday: currentToday})
    this.setState({total: subtotal+foodObject.calories*foodObject.quantity})
    this.setState({quantity: foodObject.quantity})
  }

  addIt = () => {
    var currentFoods = this.state.foods
    var newFoodItem = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: this.state.quantity
    }

    currentFoods.push(newFoodItem)
    this.setState({foods:currentFoods } )
    this.toggleModal()
  }

  render() {

    if(this.state.modalActive) {
      var classNames = "modal is-active"
    } else {
      var classNames = "modal"
    }

    var foodiesOfToday = this.state.foodsOfToday.map((food) => <li> {food.quantity} {food.name} = {food.calories*food.quantity} cal</li>)

    var FoodBoxes = this.state.foods
    .filter((food)=> 
      food.name.toLowerCase().includes(this.state.search.toLowerCase()) 
    )
    .map((food) =>
      <FoodBox addFood={this.addFoodsToday} name={food.name} calories={food.calories} image={food.image}/>
    )

    return (

      <div className="App columns">
        <section className="foodboxes column">
          <br/>
          <h1><b>All Food</b></h1>
          <br></br>
          <span>Search food: </span><input onChange={this.handleChange} name="search" placeholder={this.state.search}/>
            <button onClick={this.toggleModal} className="button is-primary is-small modal-button" data-target="modal" aria-haspopup="true">Add Food</button>
            <div className= {classNames}>
              <div className="modal-background"></div>
                <div className="modal-content">
                  <input name="name" onChange={this.handleAdd}  placeholder={this.state.name}/>
                  <input name="image" onChange={this.handleAdd}  placeholder={this.state.image}/>
                  <input name="calories" onChange={this.handleAdd}  placeholder={this.state.calories}/>
                </div>
              <button onClick={this.toggleModal} className="modal-close is-large" aria-label="close"></button>
              <button onClick={this.addIt} className="button is-primary is-large modal-button" data-target="modal" aria-haspopup="true">Add Food</button>
          </div>
          {FoodBoxes}
        </section>
        <section className="selectedfood column">
          <br/>
          <h1><b>Today's Food</b></h1>
          <br/>
            <ul>
              {foodiesOfToday}
            </ul>
            <p><b>Total: </b>{this.state.total} cal</p>
        </section>
      </div>
    )
  }
}

export default App;
