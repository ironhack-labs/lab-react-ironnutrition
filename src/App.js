import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    myFoods: foods,
    showForm: false,
    name: '',
    calories: 0,
    image: '',
  };
  handleClick = () => {
    this.setState({ showForm: !this.state.showForm });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let floor = [...this.state.myFoods];
    floor.push({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    });
    this.setState({ myFoods: floor });
  };

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    //get the value entered by user
    //szwconst value = event.target.value;
    console.log(value);
    //set the value in the state (will update the field)
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>New</button>
        {this.state.showForm === true ? (
          <form onSubmit={this.handleSubmit}>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
            />
            <br />
            <label>Calories: </label>
            <br />
            <input
              type="text"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInput}
            />
            <br />
            <label>Image: </label>
            <br />
            <input
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.handleInput}
            />
            <br />
            <button type="submit"> Add new food </button>
          </form>
        ) : null}

        {this.state.myFoods.map((el, i) => {
          return (
            <FoodBox
              key={i}
              name={el.name}
              calories={el.calories}
              image={el.image}
            />
          );
        })}
      </div>
    );
  }
}
