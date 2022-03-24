import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
// import FormDown from './components/FormDown/FormDown';
import Search from './components/Search/Search';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    foods: [...foods],
  }


    addNewFood = (food) => {
      const newFood = {
        ...food,
        id: uuidv4()
      }
      this.setState({ foods: [newFood, ...this.state.foods] })
    }
  render() {
    const {foods} = this.state
    return (
      <div className="App">
      <h1 className="title">Iron Nutrition</h1>
      <div>
        <Search/>
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
