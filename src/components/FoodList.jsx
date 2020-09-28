import React from 'react';
import FoodBox from './FoodBox';
import './Food.css';
import Modal from './modal';
import Input from './Input';
import Foods from '../foods.json';
import List from './List';

export default class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: '',
      foodDay: [],
      food: Foods,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (newFood) => {
    this.setState({
      food: [newFood, ...this.state.food],
    });
  };
  handleDelete = (foodDelete) => {
    this.setState({
      foodDay: this.state.foodDay.filter(
        (food) => food.name !== foodDelete.name
      ),
    });
  };

  addFoodDay = (food) => {
    const arrNewFood = [
      ...this.state.foodDay.filter((f) => f !== food),
      food,
    ].filter((f) => f.quantity > 0);

    this.setState({
      foodDay: arrNewFood,
      totalCalories: this.state.foodDay.reduce(
        (acum, value) => parseInt(value.calories * value.quantity) + acum,
        0
      ),
    });
  };

  render() {
    const foodAll = this.state.food.filter((food) => {
      return food.name.includes(
        this.state.Search.charAt(0).toUpperCase() + this.state.Search.slice(1)
      );
    });

    return (
      <div>
        <h1 className="title">Iron Nutrition</h1>
        <div className="container">
          <Input
            name="Search"
            value={this.state.Search}
            onChange={this.handleChange}
            type="text"
          />

          <Modal submit={this.handleSubmit} />
          <div className="columns">
            <div className="column">
              <div className="Food">
                {foodAll.map((food, i) => {
                  return <FoodBox add={this.addFoodDay} key={i} food={food} />;
                })}
              </div>
            </div>
            <List elementList={this.state.foodDay} delete={this.handleDelete} />
          </div>
        </div>
      </div>
    );
  }
}
