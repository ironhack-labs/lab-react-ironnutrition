import React from 'react';
import foods from '../foods.json';
import Foodbox from './Foodbox';
import Form from './Form';
import TodaysFood from './TodaysFood';

class AddFood extends React.Component {
  state = {
    foodsOriginal: [...foods],
    foodsCopy: [...foods],
    toggle: false,
    name: '',
    image: '',
    calories: 0,
    quantity: 0,
    searchText: '',
    foodArr: [],
  };

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddClick = () => {
    const newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    };
    this.setState({
      foodsCopy: [newFood, ...this.state.foodsCopy],
      foodsOriginal: [newFood, ...this.state.foodsCopy],
    });
  };

  handleSearch = (event) => {
    const filtered = this.state.foodsOriginal.filter((food) => {
      return food.name.toLowerCase().includes(this.state.searchText);
    });
    console.log(filtered);
    this.setState({ foodsCopy: filtered, searchText: event.target.value });
  };

  handleClickTodays = (name, calories, quantity) => {
    this.setState({
      foodArr: [
        ...this.state.foodArr,
        {
          name: name,
          calories: calories,
          quantity: quantity,
        },
      ],
    });
  };

  handleUpdateQuantity = (name, event) => {
    let i = 0;
    const n = this.state.foodsCopy.length;
    while (i < n) {
      if (this.state.foodsCopy[i].name == name) {
        this.state.foodsCopy[i].quantity = event.target.value;
      }
    }
    this.setState({ foodsCopy: this.state.foodsCopy });
  };

  render() {
    console.log(this.state.foodArr);
    return (
      <div className="columns">
        <div className="column">
          <Form
            value={this.state.searchText}
            type="text"
            onChange={this.handleSearch}
            name="searchText"
          />
          <button onClick={this.handleToggle}>Add Food</button>
          {this.state.toggle ? (
            <div>
              <Form
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                type="text"
              />
              <Form
                onChange={this.handleChange}
                value={this.state.calories}
                name="calories"
                type="number"
              />
              <Form
                onChange={this.handleChange}
                value={this.state.image}
                name="image"
                type="text"
              />
              <button onClick={this.handleAddClick}>Submit</button>
            </div>
          ) : (
            <></>
          )}
          {this.state.foodsCopy.map((element) => (
            <Foodbox
              {...element}
              onChange={this.handleUpdateQuantity}
              onClick={() =>
                this.handleClickTodays(
                  element.name,
                  element.calories,
                  element.quantity
                )
              }
            />
          ))}
        </div>
        <div className="column">
          <TodaysFood foodArr={this.state.foodArr} />
        </div>
      </div>
    );
  }
}

export default AddFood;
