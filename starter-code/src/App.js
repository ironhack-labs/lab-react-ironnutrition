import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {

  state = {
    foods: foods,
    showForm: false,
    searchedItem: ""
  }

  addNewFood = newFood => {
    let foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({foods: foodsCopy, showForm: false})
  }

  showAddForm = (event) => {
    event.preventDefault();
    this.setState({showForm: !this.state.showForm})
  }

  searchFood = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value})
  }
  
  render() {
    return (
      <div >

        <input placeholder="search for food" type="text" name="searchedItem" value={this.state.searchedItem} onChange={this.searchFood}></input>

        <button onClick={this.showAddForm}>ADD FOOD FORM</button>
        {this.state.showForm && <AddFood  addFoodFunc={this.addNewFood} />}
        
        {this.state.foods.map((oneFood) => {
            if(oneFood.name.toLowerCase().includes(this.state.searchedItem)){
              return (
              <Foodbox 
              key={oneFood.name}
              {...oneFood}/>
              )}
          })
        }

        
        
      </div>
    );
  }
}

export default App;
