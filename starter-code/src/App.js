import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Foodbox from './FoodBox';
import foods from './foods.json'


class App extends Component {
  state = {
    search: "",   
    foods: foods,

  }

  handleAdd = (event) =>{
    var newFoodAtt = {}
    var keyName = event.target.name
    var inputValue = event.target.value
    newFoodAtt[keyName] =  inputValue

    this.setState(newFoodAtt)
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
  }

  handleChange = (event) => {
    this.setState({search: event.target.value}) 
  }
  
  render() {
    
    var foodBoxes = this.state.foods
    .filter((food)=> 
      food.name.toLowerCase().includes(this.state.search.toLowerCase())
    )
    .map((food)=> <Foodbox calories={food.calories} name={food.name} image={food.image}/>)

    return (
      <div className="App">
        <input onChange={this.handleChange} name="search" placeholder={this.state.search} placeholder="search"/>
        <div>
          <input type="text" name="name" onChange={this.handleAdd} placeholder="name"/>
          <input type="text" name="image" onChange={this.handleAdd} placeholder="image"/>
          <input type="text" name="calories" onChange={this.handleAdd} placeholder="calories"/>
        </div>
        <button onClick={this.addFoodItem}>Add Food</button>
        {foodBoxes}
      </div>
    );
  }
}

export default App;
