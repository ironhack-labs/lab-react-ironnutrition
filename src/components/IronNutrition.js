import React, { Component } from 'react';

// import data
import foods from '../foods.json';

// import components
import FoodBox from './FoodBox.js';
import AddFoodForm from './AddFoodForm.js';

class IronNutrition extends Component {
  state = {
    foodList: [...foods],
    search: '',
    showForm: false,
  };

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  };

  handleShow = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  addFood = (newFood) => {
    const tempFoodList = [...this.state.foodList];
    newFood.quantity = 0;
    tempFoodList.push(newFood);
    this.setState({
      foodList: tempFoodList,
    });
  };

  render() {
    const filteredFoodList = this.state.foodList.filter((food) => {
      return food.name.toUpperCase().includes(this.state.search.toUpperCase());
    });

    return (
      <div>
        <h1>IronNutrition</h1>
        <button
          className="button is-info is-small is-fullwidth"
          onClick={() => this.handleShow()}
        >
          Add new food
        </button>
        {this.state.showForm && (
          <AddFoodForm
            addFoodFunc={(e) => this.addFood(e)}
            toggleForm={() => this.handleShow()}
          />
        )}

        <input
          className="input"
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => this.handleSearch(e)}
        />
        {filteredFoodList.map((food, index) => {
          return <FoodBox key={index} {...food} />;
        })}
      </div>
    );
  }
}

export default IronNutrition;