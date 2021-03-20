import React, { Component } from 'react';

class FoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
    isDisplayed: false,
  };

  handleSubmit = (event) => {
    event.PreventDefault();
    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.images,
    });

    this.setState({
      name: '',
      calories: '',
      image: '',
    });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleForm = () => {
    this.setState({
      isDisplayed: !this.state.isDisplayed,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}> Add new Meal</button>
        {this.state.isDisplayed && (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="calories">Calories</label>
              <input
                type="text"
                name="calories"
                id="calories"
                value={this.state.calories}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <label htmlFor="img">Image</label>
              <input
                type="text"
                name="images"
                id="img"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
            <button>ADD</button>
          </form>
        )}
      </div>
    );
  }
}

export default FoodForm;
