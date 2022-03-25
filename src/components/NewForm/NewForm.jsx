import React from 'react';
import { Component } from 'react';

const initialState = {
  name: '',
  image: '',
  calories: '',
  error: false,
};

class NewForm extends Component {
  state = { ...initialState };

  onSubmit = (event) => {
    const { calories, name, image } = this.state;
    event.preventDefault();

    if (name && image && calories && Number(calories) > 1) {
      this.props.onAddFood({
        name,
        image,
        calories: Number(calories),
      });
      this.resetForm();
    } else {
      this.setState({ error: true });
    }
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  onHandleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  onFocus = () => {
    const { error } = this.state;

    if (error) {
      this.setState({ error: false });
    }
  };

  render() {
    const { name, image, calories, error } = this.state;

    return (
      <form className="NewForm" onSubmit={this.onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            onFocus={this.onFocus}
            value={name}
            onChange={this.onHandleChange}
            name="name"
            className="form-control"
            id="name"
            placeholder="Dish name"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            image
          </label>
          <input
            onFocus={this.onFocus}
            value={image}
            onChange={this.onHandleChange}
            className="form-control"
            id="image"
            name="image"
            rows={3}
            placeholder="Your image"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="calories" className="form-label">
            Pages
          </label>
          <input
            onFocus={this.onFocus}
            value={calories}
            onChange={this.onHandleChange}
            name="calories"
            min={1}
            type="number"
            className="form-control"
            id="calories"
            placeholder="Number of calories"
          />
        </div>

        {error && <p className="text-danger">Invalid form</p>}

        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default NewForm;
