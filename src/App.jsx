import React, { Component } from 'react';
import Form from './components/Form';
import Search from './components/Search';
import FoodBox from './components/FoodBox';
import foodsJSON from './foods.json';
import TodayFoods from './components/TodayFoods';
import 'bulma/css/bulma.css';

export class App extends Component {
  state = {
    foods: foodsJSON,
    showForm: false,
    search: '',
    todayFoods: [],
  };

  toggleForm = (event) => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleSelect = (selectedFood) => {
    this.setState({ todayFoods: [selectedFood, ...this.state.todayFoods] });
  };
  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleSearch={(valueFromSearch) =>
            this.setState({ search: valueFromSearch })
          }
        />
        {this.state.foods
          .filter((food) =>
            food.name.toLowerCase().includes(this.state.search.toLowerCase())
          )
          .map((food, index) => (
            <FoodBox key={index} food={food} handleSelect={this.handleSelect} />
          ))}
        <button className="button mb-4" onClick={this.toggleForm}>
          Add new food
        </button>
        {this.state.showForm && (
          <Form
            addFood={(valueFromForm) =>
              this.setState({ foods: [valueFromForm, ...this.state.foods] })
            }
          />
        )}
        <TodayFoods handleSelect={this.handleSelect} />
      </div>
    );
  }
}

export default App;
