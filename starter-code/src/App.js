import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './Foodbox.js';


class App extends Component {

  

  state = {
    foods: foods,
    search: '',
    modalActive: false,
    classNames: 'modal',
    arrayEaten: [],
    totalCalories: 0
  }

  searchEvent = (event) => {
   this.setState({search: event.target.value})
  }

  toggleModal = () => {
    this.setState({modalActive: !this.state.modalActive})
  }

  handleAdd = (event) =>{
    var attribute = {}
    var keyName = event.target.name
    var inputValue = event.target.value
    attribute[keyName] =  inputValue
    this.setState(attribute)
  }
 
  addFoodItem = () => {
    var currentFoods = this.state.foods;
    var newFoodItem = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    }
    currentFoods.push(newFoodItem);
    this.setState({foods: currentFoods})
    this.toggleModal()
  }
  
  addEaten = (foodObject) => {
  var eaten = this.state.arrayEaten;
  eaten.push(foodObject);
  var totalCalories = this.state.totalCalories + foodObject.calories;
  this.setState({arrayEaten: eaten});
  this.setState({totalCalories: totalCalories});
  }

  render() {
   var eatenFoods = this.state.arrayEaten.map((food) => <li> {food.name}  <span>{food.calories}</span></li>)
   var calories = this.state.totalCalories
   var foodBoxes = this.state.foods
    .filter((food)=> 
      food.name.toLowerCase().includes(this.state.search.toLowerCase())
    )
    .map((food)=> 
       <Foodbox addFood={this.addEaten} name={food.name} calories={food.calories} image={food.image} />
    )
   
    this.state.modalActive ? this.state.classNames = 'modal is-active' : this.state.classNames = 'modal'
  
     return (
      <div className="App">
        <div className={this.state.classNames}>
          <div className="modal-background"></div>
          <div className="modal-content">
            <input onChange={this.handleAdd} type="text" name="name"  placeholder="Name"/>
            <input onChange={this.handleAdd} type="text" name="calories"  placeholder="Calories"/>
            <input onChange={this.handleAdd} type="text" name="image"  placeholder="Image"/>
            <button class="is-large" onClick={this.addFoodItem}>Add</button>
          </div>
        </div>
        <input onChange={this.searchEvent} name="search" placeholder="search"/>
        <button class="is-large" onClick={this.toggleModal}>Add Foods</button>

        <div className="mainContainer"> 
        <div className="boxes">{foodBoxes}</div>
        <div className="total">
          <ul>{eatenFoods}</ul>
          <h2 className="totalCalories">Total Calories: {calories}</h2>
        </div>
        </div>
       
      </div>
              
    );
  }
}

export default App;
