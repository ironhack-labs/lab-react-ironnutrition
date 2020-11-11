import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import Search from './components/Search';


class App extends Component {
  state = {
    foods,
    showForm: false,
  }

  changeForm = () =>{
    this.setState({
      showForm: !this.state.showForm
    })
  }

  searchFoodHandler = theInput =>{
    let foodCopy = [...this.state.foods]
    foodCopy = foods.filter(eachFood =>{
        return eachFood.name.includes(theInput)
    }) 
    this.setState({
      foods: foodCopy
    })
  }

  addFoodHandler = theFood => {
    const foodCopy = [...this.state.foods]
    foodCopy.push(theFood)
    this.setState({
      foods: foodCopy
    })
  }
  render() {
    return (
      <div className="App">
      <Search searchTheFood = {this.searchFoodHandler}/>
          <button style={{width:100}} onClick={() => this.changeForm()}>
                      Add food
          </button>
        {this.state.showForm ? <AddFood addTheFood={this.addFoodHandler}/> : null}
        <div className="main">
        <div className='boxes'>
          {this.state.foods.map((oneFood, index) => {
            return (
              <FoodBox key={index} food= {oneFood.name}
                  picture= {oneFood.image}
                  calories= {oneFood.calories} quantity={oneFood.quantity}
              />
            );
          })}
          </div>
          <div className="today">
            <h2>Today's foods</h2>
            <ul>

            </ul>
            <p>Total: cal</p>
          </div>
          
        </div>
        
      </div>
  )
} 
}


export default App;
