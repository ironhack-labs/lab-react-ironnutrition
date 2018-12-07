import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import Food from './components/Food';
import foods from './foods.json';
import Addform from './components/FormAdd';
import FoodyOfToday from './components/FoodyToday';

class App extends Component {
  state = {
    foodList: foods,
    search: 'search',
    newFood: {
      name: "",
      calories: "",
      image: "",
    },
    foodsOfToday: {}
  }

  handleChange = (e) => {
    this.setState({search: e.target.value})
  }

  handleDelete = (e) => {
    const foods = this.state.foodList.filter(food => food.name !== e.target.id);
    this.setState({foodList: foods})
  }

  updateNewFood = e => {
    let foodKey = e.target.name;
    let foodValue = e.target.value;
    let newState = this.state;
    newState.newFood[foodKey] = foodValue;
    this.setState(newState);
  }

  addFood = (e) => {
    let newState = this.state;
    newState.foodList.push(this.state.newFood);
    this.setState(newState);
    document.getElementById('addName').value = "";
    document.getElementById('addCal').value = "";
    document.getElementById('addImg').value = "";
  }
  addFoodsToday = (foodsObject) => {
    //  if statement that check if the 'foodsObject' is already in the 'foodsOfToday'
    var currentToday = this.state.foodsOfToday
    if (foodsObject.name in currentToday) {
      currentToday[foodsObject.name].quantity += parseInt(foodsObject.quantity);
    } else {
      currentToday[foodsObject.name] = {
        'calories': parseInt(foodsObject.calories),
        'quantity': parseInt(foodsObject.quantity),
        'name': foodsObject.name
      };
    }
    this.setState({foodsOfToday: currentToday})
  }

  render() {
    let foodiesOfToday = Object.keys(this.state.foodsOfToday).map((foodName, i) => {
      let foodObject = this.state.foodsOfToday[foodName] 
      return <FoodyOfToday key={i} name={foodObject.name} quantity={foodObject.quantity} calories={foodObject.calories}/>
      }  
    )
    
    // map for the food in here
    let foodboxes = this.state.foodList
      .filter((food) => food.name.toLowerCase().includes(this.state.search.toLowerCase()))
      .map((food, i) => 
      <Food 
        key={i} 
        id={i}
        addFoodsToday={this.addFoodsToday} 
        name={food.name} 
        calories={food.calories}  
        image={food.image}
        onDelete={this.handleDelete}
      />
    ) 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Iron Nutrition</h1>
        </header>
        <div>
          <ul>
            <li>{foodiesOfToday}</li>
          </ul>
        </div>
        <div>
          <input 
            onChange={this.handleChange} 
            name="search" 
            placeholder={this.state.search}
          />
          {foodboxes}
        </div>
        {/* this when i do not do it with class */}
        {/* <div>
          <Food  foodList={this.state.foodList} />
        </div> */}
        <div>
          <Addform 
            addFood={this.addFood} 
            updateNewFood={this.updateNewFood}
          />
        </div>
      </div>
    );
  }
}

export default App;
