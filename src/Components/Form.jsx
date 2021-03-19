import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    isDisplayed: false,
  };

  toggleForm = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };
  handleNameChange = (event) => {
    const value = event.target.value;
    this.setState({ name: value });
  };
  handleCaloriesChange = (event) => {
    const value = event.target.value;
    this.setState({ calories: value });
  };

  handleImageChange = (event) => {
    const value = event.target.value;
    this.setState({ image: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}> Add Food button</button>
        {this.state.isDisplayed && (
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              onChange={this.handleNameChange}
              type="text"
              name="name"
              value={this.state.name}
            />

            <label htmlFor="calories">Calories</label>
            <input
              onChange={this.handleCaloriesChange}
              type="number"
              name="calories"
              value={this.state.calories}
            />

            <label htmlFor="image">Image</label>
            <input
              onChange={this.handleImageChange}
              type="file"
              name="image"
              value={this.state.image}
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Form;
