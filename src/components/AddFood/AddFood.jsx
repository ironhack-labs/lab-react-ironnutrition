import React from 'react';
import './AddFood.css';

const initialState = {
  name: '',
  calories: 0,
  image: '',
};

export default class AddFood extends React.Component {
  state = { ...initialState };

  onChange = (event) => {
    const { name, value, type } = event.target;

    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.calories || !this.state.image) {
      return;
    }
    this.props.onAddFood(this.state);
    this.setState({ ...initialState });
  };

  render() {
    return (
      <form className="AddFood" onSubmit={this.onSubmit}>
        <div className="AddFood-input">
          <input
            className="input"
            type="text"
            placeholder="Insert Food"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
          />
          <input
            className="input"
            type="number"
            placeholder="Insert Calories"
            name="calories"
            value={this.state.calories}
            onChange={this.onChange}
          />
          <input
            className="input"
            type="text"
            placeholder="Insert URL"
            name="image"
            value={this.state.image}
            onChange={this.onChange}
          />
        </div>
        <div className="AddFood-button">
          <button className="button is-info">Add new food</button>
        </div>
      </form>
    );
  }
}
