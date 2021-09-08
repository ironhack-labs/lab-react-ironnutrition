import React, { Component } from 'react';
import './AddFood.css';

    const initialState = {
    name: '',
    calories: 0,
    image: '',
    }


export default class AddFood extends Component {
  state = { ...initialState };

  onChange = (event) => {
    const { name, value, type } = event.target;


    this.setState({
      [name]: type === 'number' ? Number(value) : value
    })

  }



  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.name || !this.state.image || !this.state.calories) {
      return;
    }

    // llamar a la prop de añadir un food del item
    this.props.onAddFood(this.state);

    // resetear state
    this.setState({...initialState})
  };




  render() {
    return (
      <form className="AddFood" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Insert Food"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        />

        <input
          type="number"
          placeholder="Insert Calories"
          name="calories"
          value={this.state.calories}
          onChange={this.onChange}
        />

        <input
          type="text"
          placeholder="Insert URL"
          name="image"
          value={this.state.image}
          onChange={this.onChange}
        />
        <button>Add food</button>
      </form>
    );
  }
}