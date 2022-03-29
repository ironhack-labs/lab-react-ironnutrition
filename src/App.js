import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import NewForm from './components/newForm/NewForm';
import Search from './components/search/Search';
import TodayFood from './components/todayFood/TodayFood';

class App extends Component {
  state = {
    foods: [...foods],
    todayFood: [],
    newForm: false,
    search: '',
  };
  // create a copy of foods.json and use it later

  foundFood = [...this.state.foods];

  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4(),
    };

    this.foundFood = [newFood, ...this.foundFood];
    this.setState({ foods: [newFood, ...this.state.foods] });
  };

  // adding food item to Today Foods

  addTodayFood = (food) => {
    const { todayFood } = this.state;
    const canAdd = !todayFood.some(({ id }) => food.id === id);

    if (canAdd) {
      this.setState({ todayFood: [food, ...TodayFood] });
    }
  };

  deleteItemFromTodayFood = (id) => {
    this.setState({
      todayFood: this.state.todayFood.filter((food) => food.id !== id),
    });
  };

  // searching for food

  /*   getFoodBySearchFilter = () => {
    const { foods, search } = this.state;

    return foods.filter((food) => {
      if (food.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  }; */

  onSearchFood = (event) => {
    const filteredFoods = [...this.state.foods];
    this.setState({ search: event.target.value });

    if (!event.target.value) {
      this.foundFood = [...this.state.foods];
       
    } else {
      this.foundFood = filteredFoods.filter((food) =>
        food.name.toLowerCase().includes(event.target.value.toLowerCase()))
       
    }
  };
  /*   handleOnChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  } */

  render() {
    const { foods } = this.state;

    return (
      <div className="IronNutrition">
        <div>
          <button
            className="mt-3 ml-4 button is-primary"
            onClick={() => this.setState({ newForm: true })}
          >
            Add new food
          </button>
        </div>
        <div>
          <Search search={this.state.search} onSearchFood={this.onSearchFood} />
        
        </div>
        <div>
          <div>
            {this.state.newForm ? <NewForm onAddFood={this.onAddFood} /> : null}
          </div>
        </div>
        <FoodBox foods={foods} onAddFood={this.addTodayFood} />
        <TodayFood
          foods={this.state.todayFood}
          deleteFood={this.deleteItemFromTodayFood}
        ></TodayFood>
      </div>
    );
  }
}

export default App;
