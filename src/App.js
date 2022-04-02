import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './Component/FoodBox/FoodBox';
import Button from './Component/Button/Button';
import Search from './Component/Search/Search';


class App extends Component {
  state = {
    foods: [...foods],
    search: ""
  }


    addNewFood = (foods) => {
      const newFood = {
        ...foods,
        id: uuidv4()
      }
      this.setState({ foods: [newFood, ...this.state.foods] })
    }

    toFilter = (e) => {
      this.setState({
        search: e.target.value 
      })
    }

    searchFood = () => {
      const { foods, search } = this.state

      
      return foods.filter(food => {
        if (food.name.toLowerCase().includes(search.toLowerCase())) {
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
        <Search search={this.state.search} searchFood={this.searchFood}  />
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