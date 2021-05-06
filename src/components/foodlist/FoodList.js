import React from 'react';
import 'bulma/css/bulma.css';
import FoodBox from '../foodbox/FoodBox';
import FoodForm from '../FoodForm/FoodForm';

export default class FoodList extends React.Component {
  state = {
    foods: this.props.foods.map((food, index) => ({
      ...food,
      id: `${food.name}${index}`,
    })),
    showAddForm: false,
  };

  onFoodChange = (food) => {
    this.setState((previous) => {
      const index = previous.foods.findIndex(
        (element) => element.id === food.id
      );
      return {
        foods: [
          ...previous.foods.slice(0, index),
          food,
          ...previous.foods.slice(index + 1),
        ],
        showAddForm: this.state.showAddForm,
      };
    });
  };

  addFood = (food) => {
    const arrayCopy = [...this.state.foods];
    const newFood = {
      ...food,
      id: `${food.name}${food.calories}`,
    };
    arrayCopy.push(newFood);

    this.setState({ foods: arrayCopy, showAddForm: this.state.showAddForm });
  };

  showAddForm() {
    const arrayCopy = [...this.state.foods];
    const showForm = !this.state.showAddForm;

    this.setState({ foods: arrayCopy, showAddForm: showForm });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showAddForm()}>
          {!this.state.showAddForm ? 'Show add food form' : 'Hide form'}
        </button>
        {this.state.showAddForm ? (
          <FoodForm addFood={(food) => this.addFood(food)} />
        ) : (
          ''
        )}
        <div className="foods-container">
          {this.state.foods.map((food, index) => {
            return (
              <FoodBox
                {...food}
                onChange={this.onFoodChange}
                key={`${food.name}${index}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
