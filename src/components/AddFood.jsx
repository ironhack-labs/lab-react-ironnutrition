import React, { Component } from 'react';

export class AddFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    number: 0,
    isDisplayed: false,
  };

  handleToggleForm = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.foods({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      number: this.state.number,
    });

    this.setState({
      name: '',
      calories: '',
      image: '',
      number: 0,
    });
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleToggleForm}>Add new food</button>
        {this.state.isDisplayed && (
          <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <label htmlFor="calories ">Calories</label>
            <input
              type="text"
              name="calories"
              id="calories"
              value={this.state.calories}
              onChange={this.handleInput}
            />
            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="number"
              id="number"
              value={this.state.number}
              onChange={this.handleInput}
            />
            <label htmlFor="image">Image</label>
            <input
              type="text"
              name="image"
              id="image"
              value={this.state.image}
              onChange={this.handleInput}
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default AddFood;
