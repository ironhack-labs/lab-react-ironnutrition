import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import AddForm from './AddForm';
import Search from './Search';
import FoodDetail from './FoodDetail';

class FoodBox extends Component {
  state = {
    showForm: false,
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const { name, calories } = event.target;
    let newFood = {
      name: name.value,
      calories: calories.value,
    };
    this.setState({ showForm: false }, () => {
      this.props.onAdd(newFood);
    });
  };
  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  render() {
    const { allFoods, onSearch, onTotal } = this.props;
    const { showForm } = this.state;
    return (
      <div>
        <h1>Ingredients</h1>
        <Search onSearch={onSearch} />
        {showForm ? (
          <AddForm onSubmit={this.handleSubmit} />
        ) : (
          <button onClick={this.handleShowForm} className="button is-primary">
            Show Form
          </button>
        )}

        {allFoods.map((food, index) => {
          return (
            <div>
              <FoodDetail onTotal={onTotal} food={food} key={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
