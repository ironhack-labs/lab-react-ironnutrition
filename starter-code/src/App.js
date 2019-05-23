import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodList from './components/FoodList'
import AddForm from './components/AddForm'
import SearchBar from './components/SearchBar'

class App extends Component {
  state = {
    foods: [...foods]
  }

  addFood = food => {
    this.setState({
      foods: [...this.state.foods, food]
    })
  }

  searchFood = (text) => {
    this.setState({
      foods: foods.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  render() {
    return (
      <div className="App container">
        <SearchBar searchFood={this.searchFood}/>
        <FoodList foods={this.state.foods}/>
        <AddForm addFood={this.addFood}/>
      </div>
    );
  }
}

export default App;
