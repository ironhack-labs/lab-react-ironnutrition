import React, { Component } from 'react';
import './FoodBox.css';
import FoodBox from './FoodBox';
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import AddFood from './AddFood';
import SearchBar from './SearchBar';
import TodaysFoods from './TodaysFoods';

class FoodBoxes extends Component {
  constructor(props) {
    super(props);
    this.addFoodHandler = this.addFoodHandler.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.todaysFoodHandler = this.todaysFoodHandler.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  state = {
    foods: foods,
    filterFoods: foods,
    searchTerm: this.props.searchTerm,
    showForm: false,
    todaysFoods: [],
    totalCalories: 0,
    hideAddButton:false
  };

  showForm() {
    this.setState({
      showForm: !this.state.showForm,
      hideAddButton: !this.state.hideAddButton
    });
  }

  addFoodHandler(theFood) {
    var foodsCopy = [theFood, ...this.state.foods];
    var filterFoods = [theFood,...this.state.filterFoods]

    this.setState({
      foods: foodsCopy,
      filterFoods
    });

    this.showForm();

  }

  handleSearch(searchTerm) {
    debugger;
    let foodsModified = this.state.foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.setState({
      filterFoods: foodsModified,
    });
  }

  todaysFoodHandler(food) {
    debugger;
    var todaysFoodsCopied = [...this.state.todaysFoods];
    todaysFoodsCopied.push(food);
    this.setState({
      todaysFoods: todaysFoodsCopied,
    });
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
        
          <SearchBar handleSearch={this.handleSearch} />
          <div className="addFoodBox">
            {!this.state.hideAddButton && <button className="button is-info" onClick={this.showForm}>
              Add Food
            </button>}
            {this.state.showForm && <AddFood addFood={this.addFoodHandler} />}
        </div>
          {this.state.filterFoods.map((food, index) => (
            <FoodBox
              key={index.toString()}
              name={food.name}
              image={food.image}
              quantity={food.quantity}
              calories={food.calories}
              index={index}
              todaysFood={this.todaysFoodHandler}
            />
          ))}
        </div>
        <TodaysFoods todaysFoods={this.state.todaysFoods} />
      </div>
    );
  }
}

export default FoodBoxes;
