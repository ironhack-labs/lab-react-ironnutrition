import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';

import FoodBox from './components/FoodBox'
import Search from './components/Search'
import TodaysFoods from './components/TodaysFoods'

class App extends React.Component{

  state = {
    foods: foodsJson,
    comparativeFoods: foodsJson,
    todaysFoods: {}
  }

  filterFood(e){
    const {value} = e.target
    const filteredFood = this.state.foods.filter((food)=>{
      return food.name.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({...this.state, comparativeFoods: filteredFood})
  }

  updateQty(e, index){
    const {value} = e.target
    const stateCopy = {...this.state}
    stateCopy.foods[index].quantity = value
    this.setState(stateCopy)
  }
  
  addFood(e, index){
    const food = this.state.foods[index]
    const stateCopy = {...this.state}
    if (food.name in stateCopy.todaysFoods){
      stateCopy.todaysFoods[food.name] += 1
    } else {
      stateCopy.todaysFoods[food.name] = food.quantity
    }
    this.setState(stateCopy)
  }

  render(){
    return (
      <div className="App">
        <h1 className="h1">IronNutrition</h1>

        <Search filter={(e)=>this.filterFood(e)} />

        <div className="foods-container">
          <div className="foods">
            {this.state.comparativeFoods.map((food, index)=>{
              return (
              <
                FoodBox 
                key={index} 
                food={food} 
                addFood={(e)=>this.addFood(e, index)}
                updateQty={(e)=>this.updateQty(e, index)}
              />
              )
            })}
          </div>
          {Object.keys(this.state.todaysFoods).map((foodName, index)=>{
              return (
                <TodaysFoods key={index} index={index} food={this.state.foods} todaysFoods={this.state.todaysFoods} />
              )
            })}
        </div>
      </div>
    )
  }
}

export default App;
