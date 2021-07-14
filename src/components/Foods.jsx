import React, { Component } from 'react';
import FoodDetails from './FoodDetails';
import 'bulma/css/bulma.css';
import AddFood from './AddFood';

class Foods extends Component {
  state = {
    showForm: false,
  };

  handleAddFood = (event) => {
    event.preventDefault();
    this.setState({
      showForm: false,
    });

    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value,
    };

    this.props.onAddNewFood(newFood);
  };

  handleClick = () => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    const { foods, handleTotalFood } = this.props;
    const { showForm } = this.state;

    return (
      <div>
        <h4>Food List</h4>

        {showForm ? (
          <AddFood onAddFood={this.handleAddFood} />
        ) : (
          <button onClick={this.handleClick}>Show Form</button>
        )}

        <p>
          {foods.map((food) => {
            return (
              <FoodDetails food={food} handleTotalFood={handleTotalFood} />
            );
          })}
        </p>
      </div>
    );
  }
}

export default Foods;
