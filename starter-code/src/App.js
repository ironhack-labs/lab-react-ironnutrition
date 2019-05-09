import React, { Component } from 'react';

import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import FoodList from './components/FoodList';
import TodaysFood from './components/TodaysFood';

import foods from './foods.json';

class App extends Component {
  state = {
    foods: foods,
    filteredFoods: foods,
    todaysFood: {},
    filter: '',
    form: false
  };

  toggleForm = () => {
    this.setState(({ form }) => ({
      form: !form
    }));
  };

  addFood = food => {
    const { foods } = this.state;
    food.quantity = 0;

    this.setState(
      {
        foods: [...foods, food]
      },
      () => this.filterFood()
    );

    this.toggleForm();
  };

  updateFilter = filter => {
    this.setState(
      {
        filter
      },
      () => this.filterFood()
    );
  };

  filterFood = () => {
    const { filter, foods } = this.state;
    const filteredFoods =
      filter === ''
        ? foods
        : foods.filter(food => {
            const lowercaseName = food.name.toLowerCase();
            const lowercaseFilter = filter.toLowerCase();

            return lowercaseName.indexOf(lowercaseFilter) !== -1;
          });

    this.setState({
      filteredFoods
    });
  };

  addToTodaysFood = (id, quantity) => {
    const { todaysFood, foods } = this.state;

    const food = foods[id];
    food.quantity = quantity;

    todaysFood[id] = food;

    this.setState({ todaysFood });
  };

  render() {
    const { toggleForm, addFood, updateFilter, addToTodaysFood } = this;
    const { filteredFoods, todaysFood, form } = this.state;

    return (
      <main className="container">
        <h1 className="title">IronNutrition</h1>
        <section>
          {form ? (
            <AddFoodForm addFood={addFood} />
          ) : (
            <button className="button is-link" onClick={toggleForm}>
              Add Food
            </button>
          )}
        </section>
        <SearchBar updateFilter={updateFilter} />
        <section className="columns">
          <article className="column">
            <FoodList foods={filteredFoods} addToTodaysFood={addToTodaysFood} />
          </article>
          <article className="column">
            <TodaysFood foods={todaysFood} />
          </article>
        </section>
      </main>
    );
  }
}

export default App;
