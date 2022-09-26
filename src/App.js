import React, { Component } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodCard from './components/FoodCards/FoodCard';
import FoodForm from './components/FoodForm/FoodForm';
import { Button } from 'antd';

class App extends Component {
  state = {
    foods: [...foodsJSON],
    searchText: '',
    showForm: false
  }

  addNewFood = (food) => {
    this.setState({ 
      foods: [food, ...this.state.foods]
    })
  }

  getFoodsToRender = () => {
    const { foods, searchText } = this.state

    if (searchText) { // '' -> falsy
      return foods.filter(food => {
        return food.name.toLowerCase().includes(searchText.toLowerCase())
      })
    }
    return foods
  }

  handleSearch = (event) => {
    const { value } = event.target
    this.setState({ 
      searchText: value 
    })
  }

  deleteFood = (name) => {
    this.setState((prevState) => ({
      foods: prevState.foods.filter(food => food.name !== name)
    }))
  }

  showForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }))
  }

  render() {
    const foods = this.getFoodsToRender()
    const { searchText, showForm } = this.state

    return (
      <div className="App">
        <div className='app-form-container'>
          {showForm && <FoodForm addNewFood={this.addNewFood} />}
          <Button type="primary" danger onClick={this.showForm} className="app-toggle-btn">
            {showForm ? 'Hide form' : 'Show form'}
          </Button>
        </div>
        
        <div className='app-search-container'>
          <input id="search" name="search" value={searchText} onChange={this.handleSearch} placeholder='SEARCH FOOD'/>
        </div>

        <div className='app-foodcard-container'>
          <h2>FOOD LIST</h2>
          {foods.length > 0 ?
          <FoodCard foods={foods} deleteFood={this.deleteFood} />
          :
          <p>There's no food left</p>}
        </div>
      </div>
    );
  }
}

export default App;
