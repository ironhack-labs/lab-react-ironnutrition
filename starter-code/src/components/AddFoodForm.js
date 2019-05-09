import React, { Component } from 'react';

const initialState = {
  name: '',
  calories: '',
  image: ''
};

class AddFoodForm extends Component {
  state = initialState;

  handleInput = ({ target: input }) => {
    const { name, value } = input;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    const { addFood } = this.props;

    e.preventDefault();

    addFood(this.state);

    this.setState(initialState);
  };

  render() {
    const { handleSubmit, handleInput } = this;
    const { name, calories, image } = this.state;

    return (
      <form onSubmit={handleSubmit} className="box">
        <div className="field">
          <label className="label">Name:</label>
          <div className="control">
            <input className="input" type="text" name="name" value={name} onChange={handleInput} />
          </div>
        </div>
        <div className="field">
          <label className="label">Calories:</label>
          <div className="control">
            <input className="input" type="number" name="calories" value={calories} onChange={handleInput} />
          </div>
        </div>
        <div className="field">
          <label className="label">Image:</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="image"
              value={image}
              placeholder="Please enter a URL"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-success" type="submit">
              Add Food
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddFoodForm;
