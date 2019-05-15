import React, { Component } from 'react';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import AddFood from './components/AddFood.js';

class App extends Component {
  state = {
    foods,
    filteredFoods: foods,
    name: '',
    calories: '',
    image: '',
    formHide: true,
    foodList: {}
  }

  showForm = () => {
    let formHide = this.state.formHide
    this.setState({
      formHide: !formHide
    })
  }

  filterFood = (e) => {
    let filter = this.state.foods.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredFoods: filter
    })
  }

  submitForm = (e) => {
    e.preventDefault()

    let item = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    }

    let newItem = [...this.state.filteredFoods]
    newItem.push(item)
    this.setState({
      filteredFoods: newItem
    })
  }

  setItem = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  addFoodToList = (food) => {
    let foodListCopy = { ... this.state.foodList }
    foodListCopy[food.name] = food
    this.setState({ foodList: foodListCopy })

  }




  showFoodList = () => {
    let foodListCopy = { ... this.state.foodList }
    return Object.keys(foodListCopy).map(function (key) {
      return <li>{foodListCopy[key].quantity} {foodListCopy[key].name} = {foodListCopy[key].calories} cal</li>

    });
  }

  countTotal = () => {
    let total = 0;
    let foodListCopy = { ...this.state.foodList }
    for (let key in foodListCopy) {
      total += Number(foodListCopy[key].calories)
    }
    return total

  }


  render() {
    return (
      <div class="container">
        <h1 className="title has-text-centered">IronNutrition</h1>
        <div>
          <input type="text" onChange={this.filterFood} class="input search-bar" name="search" placeholder="Search" autocomplete="off" />
        </div>
        <div className="has-text-centered">
          <button className="button" onClick={this.showForm}>Add New Food</button>
        </div>
        <div class="columns">
          <div class="column">
            <form onSubmit={this.submitForm} style={{ display: this.state.formHide ? "none" : "block" }} autocomplete="off">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input" name="name" onChange={this.setItem} type="text" placeholder="Text input" autocomplete="off" />
                </div>
              </div>
              <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                  <input className="input" name="calories" onChange={this.setItem} type="text" placeholder="Calories" autocomplete="off" />
                </div>
              </div>
              <div className="field">
                <label className="label">Image URL</label>
                <div className="control">
                  <input className="input" name="image" onChange={this.setItem} type="text" placeholder="Image URL" autocomplete="off" />
                </div>
              </div>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-link" onClick={this.showForm}>Submit</button>
                </div>
              </div>
            </form>
            <br></br>
            <br></br>
            {this.state.filteredFoods.map((items, i) => {
              return <FoodBox {...items} add={this.addFoodToList} />
            })}
          </div>
          <div class="column content">
            <br></br>
            <h2 class="subtitle">Today's foods</h2>
            <ul>
              {this.showFoodList()}
            </ul>
            <strong>Total: {this.countTotal()} cal</strong>
          </div>

        </div>
      </div>
    );
  }
}

export default App;


