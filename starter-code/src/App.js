import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood'
import Search from './components/Search';

class App extends Component {

  state = {
    foods: foods,
    moreFood: foods,
    ShowForm: false
  }

  showForm = () => {
    this.setState({ ShowForm: !this.state.ShowForm })
  }

  addFood = (food) => {
    let newArray = [...this.state.foods]
    this.state.moreFood = newArray
    this.state.moreFood.push(food)

    this.setState({ foods: this.state.moreFood })
  }

  searchFood = (food) => {

    let newArray = [...this.state.foods]
    let search = newArray.filter((e) => {
      return e.name.toLowerCase().indexOf(food.toLowerCase()) !== -1;
    })

    this.setState({ foods: food ? search : this.state.moreFood })
  }

  render() {
    return (
      <div className="App">
        <Search searchFood={this.searchFood} />
        <button onClick={this.showForm}>Crear</button>
        <h2>Add Food</h2>
        {this.state.ShowForm ? <AddFood addFood={this.addFood} /> : ''}
        {this.state.foods.map((foods, i) => <FoodBox {...foods} key={i} />)}
      </div>
    );
  }
}

export default App;
