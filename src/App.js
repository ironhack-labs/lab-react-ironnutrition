import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Button from './components/misc/Button';
import NewForm from './components/newForm/NewForm';
import Search from './components/search/Search';
import TodayFood from './components/todayFood/TodayFood'

class App extends Component {
  state = {
    foods: [...foods],
    todayFood: [],
    newForm: false,
  };
// adding food item to Today Foods

addTodayFood = (food) => {
  const { todayFood } = this.state
  const canAdd = !todayFood.some(({ id }) => food.id === id)

  if (canAdd) {
    this.setState({ todayFood: [food, ...TodayFood] })
  }
};

deleteItemFromTodayFood = (id) => {
  this.setState({ todayFood: this.state.todayFood.filter(food => food.id !==id) })
}
  // adding new food

  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4(),
    };
    this.setState({ foods: [newFood, ...this.state.foods] });
  };
  newForm = () => {
    return <NewForm onAddFood={this.onAddFood} />;
  };

  // searching for food

  getFoodBySearchFilter = () => {
    const { foods, search } = this.state;

    return foods.filter((food) => {
      if (food.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });
  };

  render() {
    const { foods } = this.state;

    return (
      <div className="IronNutrition">
        <div>
          <Button />
        </div>
        <div>
          <Search getFoodBySearchFilter={this.getFoodBySearchFilter} />
        </div>
        <div>
          <div>{this.state.newForm ? this.newForm() : null}</div>
          {/*      <NewForm onAddFood={this.onAddFood}></NewForm> */}
        </div>
        <FoodBox foods={foods} onAddFood={this.addTodayFood}/>
        <TodayFood
          foods={this.state.todayFood} deleteFood={this.deleteItemFromTodayFood}
          >
        </TodayFood>
      </div>
    );
  }
}

export default App;
