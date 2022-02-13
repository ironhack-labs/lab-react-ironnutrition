import React, { Component } from 'react';

export default class AddFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  onChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = (event) => {
    event.preventDefault();

    this.props.addNewFood(this.state);

    this.setState({
      name: '',
      calories: '',
      image: '',
    });
  };

  render() {
    return (
      <div>
        <h3>
          Name:{' '}
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          Calories:{' '}
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={this.onChange}
          />
          Image:{' '}
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.onChange}
          />
        </h3>
        <button onClick={this.submitForm}>Add</button>
      </div>
    );
  }
}
