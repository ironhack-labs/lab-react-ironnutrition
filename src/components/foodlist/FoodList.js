import React from 'react';
import 'bulma/css/bulma.css';
import './FoodList.css';
import FoodBox from '../foodbox/FoodBox';
import FoodForm from '../FoodForm/FoodForm';
import Search from '../search/Search';
import TodaysFoods from '../todaysFoods/TodaysFoods';

export default class FoodList extends React.Component {
  state = {
    formVisible: false,
    filteredFoods: this.props.foods,
    todaysFoods: [],
  };

  handleFormVisibility = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  handleNewFood = (newFood) => {
    this.props.foods.push(newFood);
    this.handleFormVisibility();
  };

  handleSearch = (search) => {
    const filteredFoods = this.props.foods.filter((food) => {
      return food.name.toUpperCase().includes(search.toUpperCase());
    });
    this.setState({ filteredFoods: filteredFoods });
  };

  addToTodaysFoods = (food) => {
    let repeated = false;
    const todaysFoodsCopy = this.state.todaysFoods.map((f) => {
      if (f.name === food.name) {
        f.quantity = f.quantity + food.quantity
        repeated = true;
      } 
      return f;
    })
    if (!repeated) {
      todaysFoodsCopy.push(food)
    }
    this.setState({ todaysFoods: todaysFoodsCopy });
  };

  deleteItemTodaysFoods = (index) => {
    let todaysFoodsCopy = [...this.state.todaysFoods];

    todaysFoodsCopy.splice(index, 1);
    this.setState({ todaysFoods: todaysFoodsCopy });
  };

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <button
              className="button is-info"
              onClick={this.handleFormVisibility}
            >
              Add new food
            </button>
            {this.state.formVisible && (
              <FoodForm addFood={this.handleNewFood} />
            )}
            <Search search={this.handleSearch} />
            <ul className="food-list">
              {this.state.filteredFoods.map((food) => (
                <li className="food-item" key={food.name}>
                  <FoodBox
                    addToTodaysFoods={this.addToTodaysFoods}
                    food={food}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="column is-half mt-6">
            <TodaysFoods
              removeItemByIndex={this.deleteItemTodaysFoods}
              items={this.state.todaysFoods}
            />
          </div>
        </div>
      </div>
    );
  }
}
