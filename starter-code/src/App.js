import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import Food from './components/Food';


class App extends Component {
  constructor() {
    super()
    this.foods = [...foods]
    this.state = {
      open: false,
      foods: [...this.foods],
      currentFood: {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
      }
    }
  }

  toggle() {
    let toggleState = !this.state.open;
    this.setState({
      open: toggleState
    })
  }

  updateFood(e, key){
    let updatedFood = {...this.state.currentFood}
    updatedFood[key] = e.target.value;

    this.setState({
      ...this.state,
      currentFood: updatedFood
    })

    console.log(this.state.currentFood)
  }

  addFood(e) {
    e.preventDefault();
    let updatedFoods = [...foods]
    updatedFoods.push({
      name: this.state.currentFood.name,
      calories: this.state.currentFood.calories,
      image: this.state.currentFood.image
    })
    this.setState({
      ...this.state,
      currentFood: {
        name: "",
        calories: 0,
        image: "",
        quantity: 0
      },
      foods: updatedFoods
    })
  }

  findFood(e) {
    let searchedFood = [...this.state.foods]
    searchedFood = searchedFood.filter(food => 
      food.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({
      ...this.state,
      foods: searchedFood
    })
  }


  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <button onClick={() => this.toggle()}>Add New Food</button>
        {this.state.open && (
          <form>
            <input 
                type="text"
                placeholder="food name"
                onChange={(e) =>this.updateFood(e, "name")}
                value={this.state.currentFood.name}
                />
            <input 
                type="number"
                placeholder="food calories"
                onChange={(e) =>this.updateFood(e, "calories")}
                value={this.state.currentFood.calories}
                />
            <input 
                type="text"
                placeholder="food image"
                onChange={(e) =>this.updateFood(e, "image")}
                value={this.state.currentFood.image}
                />         
            <button onClick={(e) => this.addFood(e)}>Save</button>
          </form>
        ) }
        <div>
          <input 
            type="text" 
            className="input search-bar" 
            // name="search" 
            placeholder="Search" 
            onChange={(e) => this.findFood(e)}
            />
        </div>
        <div className="columns">
          <div className="column">
            {this.state.foods.map((food, idx) => (<Food key={idx} payLoad={food} />))}
          </div>
        </div>
      </div>


    )
  }
}
export default App;
