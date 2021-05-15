import React from 'react';
import './NewFood.css';

export default class NewFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.newFood(this.state);

    this.setState({
      name: '',
      calories: 0,
      image: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        />

        <label>Calories</label>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.calories}
          name="calories"
        />

        <label>Image URL</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.image}
          name="image"
        />

        <button>Add Food</button>
      </form>
    );
  }
}
