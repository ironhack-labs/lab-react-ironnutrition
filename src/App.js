import 'bulma/css/bulma.css';
import React, { Component } from 'react';
import './App.css';
import FoodBoxContainer from './component/foodBoxContainer';
import FoodForm from './component/foodForm';
import foods from './foods.json';
import TodayFoodList from './component/todayFood';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      foods,
      formOpen: false,
      search: '',
      todaysFood: [],
    };
  }

  showFoodForm() {
    this.setState({ formOpen: true })
  };

  addFood(food) {
    const newFoods = [...this.state.foods, {
      ...food,
      quantity: 0,
    }];
    this.setState({ foods: newFoods, formOpen: false });
  }

  removeFood(food) {
    const newFoods = this.state.todaysFood.filter(el => el !== food);
    this.setState({
      todaysFood: newFoods,
    })
  }

  addTodaysFood(food) {
    const newFoods = [ ...this.state.todaysFood ];
    const foodIndex = newFoods.findIndex((el) => el.name === food.name);
    if (food.quantity < 1) {
      return;
    }
    if (foodIndex > -1) {
      newFoods[foodIndex].quantity = parseInt(newFoods[foodIndex].quantity) + parseInt(food.quantity);
    } else {
      newFoods.push({
        ...food,
        quantity: parseInt(food.quantity),
      });
    }

    this.setState({ todaysFood: newFoods });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const formOpen = this.state.formOpen;
    const search = this.state.search;
    const foods = this.state.foods.filter(food => food.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
    const todaysFood = this.state.todaysFood;
    return (
      <div className="App">
        <div className='body'>
          <div className='btn-div'>
            {
              formOpen ?
                <FoodForm addFood={(food) => this.addFood(food)} /> :
                <button onClick={() => this.showFoodForm()}>Add food</button>
            }
          </div>
          <input className='input' type='text' name='search' value={search} onChange={(e) => this.handleChange(e)} placeholder='Search food item...' />
          <div class='columns'>
            <div class='column'>
              <FoodBoxContainer foods={foods} addTodaysFood={(food) => this.addTodaysFood(food)} />
            </div>
            <div class='column'>
              <TodayFoodList todaysFood={todaysFood} removeItem={(food) => this.removeFood(food)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;