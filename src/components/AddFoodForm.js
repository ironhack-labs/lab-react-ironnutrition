import React, { Component } from 'react';

class AddFoodForm extends Component {
  state = {
    name: '',
    calories: '',
    image: '',
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addFoodFunc(this.state);
    this.setState({
      name: '',
      calories: '',
      image: '',
    });
    this.props.toggleForm();
  };

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="food name"
              value={this.state.name}
              onChange={(e) => this.handleInput(e)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              name="calories"
              className="input"
              type="number"
              placeholder="how many calories"
              value={this.state.calories}
              onChange={(e) => this.handleInput(e)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              name="image"
              className="input"
              type="text"
              placeholder="image url"
              value={this.state.image}
              onChange={(e) => this.handleInput(e)}
            />
          </div>
        </div>

        <div className="field is-grouped is-grouped-centered">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddFoodForm;