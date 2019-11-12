/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import AddFood from './components/AddFood';
import Search from './components/Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      displayForm: false,
      myFoods: [],
    };
    this.addFoods=this.addFoods.bind(this);
    this.showForm=this.showForm.bind(this);
  }

  showForm() {
    this.setState({
      displayForm: true,
    })
  }

  addFoods(newFood) {
  const foodsCopy = [...this.state.foods];
  foodsCopy.push(newFood);
  this.setState({
      foods: foodsCopy,
      displayForm: false,
    })
  }

  render() {
    return (
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Iron Nutrition</h1>
          <button type="submit" name="Add a New Food" className="button is-info is-rounded add-button" onClick={this.showForm} >Add a New Food</button>
          {this.state.displayForm && <AddFood AddFood={this.addFoods} />} 
          <Search foods={this.state.foods}/>
        </header>
      </div>
    );
  }
}

export default App;
