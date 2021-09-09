import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/foodbox/FoodBox';
import NewFood from './components/newfood/NewFood';
import Search from './components/search/Search';
import foods from './foods.json';

export default class App extends React.Component {
  state = {
    foods: foods.map((food) => ({
      ...food, quantity: 0
    })),
    showForm: false,
    id: uuidv4()
  }

  render() {
    return(
      <div className='App'>
      <h1>Iron Nutrition</h1>
      <div>
      <Search />
      {this.state.foods.map((food) => {
            return <FoodBox {...food} key={food.id} />;
          })}
      </div>
      <NewFood />
      </div>
    )
  }
}