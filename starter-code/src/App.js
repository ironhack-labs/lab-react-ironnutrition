import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import FormFood from './components/FormFood'
import Search from './components/Search';
import TodayFood from './components/TodayFood'

class App extends Component {

  state = {
    foods,
    toggleForm: false
  }

  handleButton = e => {
    this.setState(prevState => { return { toggleForm: !prevState.toggleForm } })
  }

  addFood = food => {
    this.setState(prevState => {
      return {
        foods: [...prevState.foods, food]
      }
    })
  }

  handleSearch = e => {
    let foodSearch = foods.filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase()))
      
    this.setState({
      foods: foodSearch
    })
  }

  handleAdd = e => {

  }

  render() {
    return (
      <div className="App">
        <Search handleSearch={this.handleSearch}/>
        <button onClick={this.handleButton}>New food</button>
        {this.state.toggleForm && <FormFood addFood={this.addFood} />}
        {this.state.foods.map(food => {
          return <FoodBox food={food} handleAdd={this.handleAdd}/>
        })}
      </div>
    );
  }
}

export default App;
