import React from 'react';

class AddFood extends React.Component {
  state = {
    name: '',
    calories: 0,
    image: '',
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newFood = this.state;

    this.props.createFood(newFood);

    this.setState({
      name: '',
      calories: 0,
      image: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
          />
          <br />

          <label>Number of calories: </label>
          <input
            type="number"
            name="calories"
            value={this.state.calories}
            onChange={this.handleInput}
          />
          <br />

          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleInput}
          />
          <br />

          <button type="submit"> Create A New Food </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
