import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
// import FormDown from './components/FormDown/FormDown';
import Button from './components/Button/Button';
import Search from './components/Search/Search';

class App extends Component {
  state = {
    foods: [...foods],
    search: ""
  }


    addNewFood = (food) => {
      const newFood = {
        ...food,
        id: uuidv4()
      }
      this.setState({ foods: [newFood, ...this.state.foods] })
    }

    getFoodsBySearchFilter = () => {
      const { foods, search } = this.state
  
      // return foods.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
      return foods.filter(food => {
        if (food.title.toLowerCase().includes(search.toLowerCase())) {
          return true
        }
        return false
      })
    }
  
  render() {
    const {foods} = this.state
    return (
      <div className="App">
      <h1 className="title">Iron Nutrition</h1>
      <div>
        <Search />
      </div>
      <div>
        <Button />
      </div>
        <div>
          <FoodBox foods={foods} />
        </div>
      </div>
    );
  }
}

export default App;
