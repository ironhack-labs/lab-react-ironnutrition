import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import data from './foods.json';

import FoodBox from './components/FoodBox';
import SearchBar from './components/SearchBar';
import Modal from './components/Modal';

class App extends Component {
  state = {
    food: [...data],
    search: '',
    total: 0,
    addedFood: [],
    modal: false,
    foodName: '',
    foodCalorie: ''
  }

  changeText = (el) => {
    this.setState({
        search: el.target.value 
    })
  }

  filterFood = () => {
    if(this.state.search) {
      const newFood = this.state.food.filter( el => {
        return el.name.toUpperCase().includes(this.state.search.toUpperCase())
      })

      return newFood.map( (el, index) => <FoodBox key={index} {...el} updateFoodList={this.updateFoodList} />)
    } else {
      return this.state.food.map( (el, index) => <FoodBox key={index} {...el} updateFoodList={this.updateFoodList} />)
    }
  }

  updateFoodList = (foodInfo) => {
    let newList = [];
    const index = this.state.addedFood.findIndex( food => food.name === foodInfo.name);
    if(index >= 0) {
      newList = [...this.state.addedFood]
      newList[index].qty = Number(newList[index].qty) + Number(foodInfo.qty)
    } else {
      if(foodInfo.qty > 0) {
        newList = [...this.state.addedFood, foodInfo]      
      } else {
        newList = [...this.state.addedFood]
      }
    }

    this.updateTotal(newList)
  }

  updateTotal = (list) => {
    const sum = list.reduce( (acc, value) => {
      return acc + Number(value.cal) * Number(value.qty)
    }, 0)

    this.setState({
      addedFood: list,
      total: sum
    })
  }

  getFoodName = (ev) => {
    this.setState({
      foodName: ev.target.value
    })
  }

  getFoodCalorie = (ev) => {
    this.setState({
      foodCalorie: ev.target.value
    })
  }

  addFood = (ev) => {
    ev.preventDefault();

    const data = {
      name: this.state.foodName,
      calories: this.state.foodCalorie,
      image: 'default-food.jpg',
      quantity: 0
    }

    const newFood = [...this.state.food, data]
    this.setState({
      food: newFood,
      modal: false
    });
  }

  deleteList = (ev) => {
    const index = ev.target.parentElement.id
    const newAddedFood = [...this.state.addedFood]
    newAddedFood.splice(index, 1);

    this.updateTotal(newAddedFood)
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <SearchBar onChange={this.changeText} search={this.state.search} />
        <div className="container">
          <div className="columns">
            <div className="column is-3">
              <button className="button" onClick={this.toggleModal}>Add food</button>
            </div>
          </div>

          <div className="columns">
              <div className="column is-5 is-offset-1">
                {
                  this.filterFood()
                }
              </div>

              <div className="column is-5 is-offset-1">
                <h1>Today's foods</h1>
                <ul>
                  {
                    this.state.addedFood.map( (food, index) => <li key={index} id={index}>{food.qty} {food.name} - {food.cal} cal <button onClick={this.deleteList} className="delete"></button></li>)
                  }
                </ul>  
                <p>Total: {this.state.total} cal</p>
              </div>  
              <Modal modal={this.state.modal} addFood={this.addFood} getFoodName={this.getFoodName} getFoodCalorie={this.getFoodCalorie} foodName={this.state.foodName} foodCalorie={this.state.foodCalorie} toggleModal={this.toggleModal} />
          </div>
        </div>      
      </div>

    );
  }
}

export default App;
