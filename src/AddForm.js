import './AddForm.css';

import { Component } from 'react';
import Button from './Button';

class AddForm extends Component {
  constructor() {
    super();

    this.state = {
      isPressed: false,
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    };
  }

  switchForm = () => {
    this.setState({
      isPressed: !this.state.isPressed,
    });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addFood(this.state);

    this.setState({
      isPressed: false,
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    });
  };

  render() {
    return (
      <>
        {!this.state.isPressed && (
          <Button switchForm={() => this.switchForm()} />
        )}

        {this.state.isPressed && (
          <form onSubmit={this.handleSubmit}>
            <label className="column is-full is-centered">
              Name:{' '}
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </label>

            <label className="column is-full is-centered">
              Calories:{' '}
              <input
                type="text"
                value={this.state.calories}
                onChange={this.handleChange}
                name="calories"
              />
            </label>

            <label className="column is-full is-centered">
              Image:{' '}
              <input
                type="text"
                value={this.state.image}
                onChange={this.handleChange}
                name="image"
              />
            </label>

            <input
              type="submit"
              value="Add food"
              className="button column is-centered"
            />
          </form>
        )}
      </>
    );
  }
}

export default AddForm;
