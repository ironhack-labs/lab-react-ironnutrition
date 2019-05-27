import React, { Component } from 'react';
import './App.css';
import food from './data/foods.json'
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    completeFoodList : [...food]
  }

  handleNewFood = (a,b,c) => {
    this.setState({
      completeFoodList:[{a,b,c} ,...this.state.completeFoodList]
    })
  }
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1>IronNutrition</h1>
        </div> 
        <div>
          <AddFood onNewFood={this.props.handleNewFood}/>
        </div>
        <div>
          <FoodList foodList = {this.state.completeFoodList}/>
        </div>
        
      </div>
    );
  }
}

export default App;
