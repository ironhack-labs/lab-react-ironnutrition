import { extend } from 'lodash';
import React from 'react';
import './NewFood.css';

class NewFood extends React.Component {
  state = {
    clicked: false,
    name: '',
    calories: 0,
    image: '',
  };

  registerNewFood = () => {
    if (this.state.clicked) {
      this.setState({
        clicked: false,
      });
    } else {
      this.setState({
        clicked: true,
      });
    }
  };

  onChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onChangeCalories = (event) => {
    this.setState({
      calories: event.target.value,
    });
  };

  onChangeImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onAdd({
        name: this.state.name,
        calories: this.state.calories,
        image: this.state.image
    });
  };

  render() {
    return (
      <div className="NewFood">
        <button onClick={this.registerNewFood}>Add New Food</button>
        {this.state.clicked ? (
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Insert Food"
                value={this.state.name}
                onChange={this.onChangeName}
              ></input>
              <input
                type="number"
                placeholder="Insert Calories"
                value={this.state.calories}
                onChange={this.onChangeCalories}
              ></input>
              <input
                type="file"
                placeholder="Insert URL"
                value={this.state.image}
                onChange={this.onChangeImage}
              ></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}

export default NewFood;
