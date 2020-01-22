import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsArray from './foods.json';
import FoodBox from './components/FoodBox.js';
import AddFood from './components/AddFood.js';
import Search from './components/Search.js';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      foodsOriginal: foodsArray,
      foods: foodsArray,
      showForm: false,
    }

   this.getNewFood = this.getNewFood.bind(this);
  this.toggleForm = this.toggleForm.bind(this);

  }

  getNewFood(food) {
    const foodsCopy = [...foodsArray];
    foodsCopy.push(food)
    this.setState({
      foods: foodsCopy,
    })
  }

  toggleForm() {
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  render() {
    return (
      <div className="App">
      <Search />
      {
        this.state.foods.map((eachFood, idx) =>{
          return <FoodBox foodsProps={eachFood} idx={idx}/>
        })
      }
      <button onClick={this.toggleForm}> Add Food</button>
      {this.state.showForm ? <AddFood newFood={this.getNewFood} toggleSubmit={this.toggleForm}/> : <p> No form! </p>}

      </div>
    );
  }
}

export default App;
