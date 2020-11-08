import React, { Component } from 'react';

import './CreateFoodActions.css';

class CreateFoodActions extends Component {
  state = {
    showForm: false,

    food: {
      name: '',
      image: '',
      calories: '',
    },
  }

  handleChange = event => {
    const { name, value } = event.target;

    const updatedForm = { ...this.state.food, [name]: value };

    this.setState({ food: updatedForm });
  }

  handleToggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  handleCreateFood = () => {
    const{ addFood } = this.props;

    addFood(this.state.food);

    this.setState({
      showForm: false,
      food: {
        name: '',
        image: '',
        calories: '',
      },
    })
  }

  render() {
    const { showForm } = this.state;
    const { name, image, calories } = this.state.food;
    return (
      <div>
        <button onClick={this.handleToggleForm}>
          {showForm ? (
            'Close Form'
          ): (
            'Create New Food'
          )}
        </button>
        {showForm && (
          <form>
          <input type="text" name="name" placeholder="Food name" value={name} onChange={this.handleChange} />
          <input type="text" name="image" placeholder="Food image URL" value={image} onChange={this.handleChange} />
          <input type="number" name="calories" placeholder="Food calories amount" value={calories} onChange={this.handleChange} />
  
          <button type="button" onClick={this.handleCreateFood}>Create Food</button>
        </form>
        )}
      </div>
    );
  }
};

export default CreateFoodActions;