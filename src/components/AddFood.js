import React from 'react';
import foods from './../foods.json';

class AddFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleInput = (event) => {
    let { type, name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };
    this.props.addNewFood(newFood);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Add food:</h2>
          <br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />
          <label>Calories:</label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />
          <br />
        </form>
        <button onClick={this.handleSubmit}>Add food</button>
      </div>
    );
  }
}

export default AddFood;
