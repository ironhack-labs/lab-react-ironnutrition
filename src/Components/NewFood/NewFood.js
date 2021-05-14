import React from 'react';
import './NewFood.css';

export default class NewFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleChange = (event) => {
    const { name, value, type } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form action={this.props.newFood(this.state)}>
        <div>
          <label></label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          />
        </div>
        <div>
          <label></label>
          <input
            type="number"
            onChange={this.handleChange}
            value={this.state.calories}
            name="calories"
          />
        </div>
        <div>
          <label></label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.image}
            name="image"
          />
        </div>
        <button>Add Food</button>
      </form>
    );
  }
}
