import React, { Component } from 'react';
import foods from './foods.json'
import './App.css';
import '../../node_modules/bulma/css/bulma.css'
import FoodBox from './components/foodbox'

class App extends Component {

  state = {
    filtered:[],
    allFoods: foods
  }

  handleChange(e) {
      this.setState({
      [e.target.value]:e.target.value})
    }



render () {
  return (
      <div className="App">
      <h1 className="title is-1">IronNutrition</h1>
        
        <button>Add New Food</button>
          <form>
            <input type="text" placeholder="Add a food here!"/>
          </form>

        <div className="columns">
          <div className="column">          
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
            <FoodBox/>
          </div>
          <div className="column">
          <h1 className="title">Today's foods</h1>
          <h1 className="subtitle"> Total Cal: {}</h1>

          </div>



        </div>
      </div>
    );}
  
}

export default App;
