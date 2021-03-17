import React, { Component } from 'react';

class FormFood extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addFood(this.state)

    this.setState({
      name: '',
      calories: '',
      image: ''
    });
    
  };

  handleNameSubmit = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleCaloriesSubmit = (event) => {
    this.setState({
      calories: event.target.value,
    });
  };

  handleImageSubmit = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label htmlFor="name">Name</label> <br />
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={(event) => this.handleNameSubmit(event)}
          />
        </div>

        <div>
          <label htmlFor="calories">Number of Calories</label> <br />
          <input
            type="number"
            name="calories"
            id="calories"
            value={this.state.calories}
            onChange={(event) => this.handleCaloriesSubmit(event)}
          />
        </div>

        <div>
          <label htmlFor="image">Image</label> <br />
          <input
            type="text"
            name="image"
            id="image"
            value={this.state.image}
            onChange={(event) => this.handleImageSubmit(event)}
          />
        </div>

        <button>Submit</button>
      </form>
    );
  }
}

export default FormFood;
