import React from "react";
import "bulma/css/bulma.css";
import foods from "../../foods.json";
import FoodBox from "./FoodBox";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      foods: foods,
      todaysFood: [],
      total: 0
    };

    this._updateSearchChange = this._updateSearchChange.bind(this);
    this._updateQuantity = this._updateQuantity.bind(this);
    this._addFood = this._addFood.bind(this);;



  }

  render() {
    const foodList = this.state.foods.map((food, index) => {
      return (
        <FoodBox
          name={food.name}
          index={index}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
          key={"food_" + index}
          updateQuantity={this._updateQuantity}
          addFood={this._addFood}
        />
      );
    });

    const todaysFoodList = this.state.todaysFood.map((food, index) => {
      return (
        <li
        key={"food_" + index}
        >{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
      )
    })

    return (
      <div className="container">
        <h1>IronNutrition</h1>
        <input
          onChange={this._updateSearchChange}
          className="input"
          type="text"
        />
        <div className="columns">
          <div className="column">{foodList}</div>
          <div className="column is-one-third">
            <h2>Today's List</h2>
            <ul>
              {todaysFoodList}
            </ul>
            <p>Total: {this.state.total} cal</p>
          </div>
        </div>
      </div>
    );
  }


  _addFood({calories, name, quantity, index}) {
    let sameFood = false;
    let newArr = [];
    this.state.todaysFood.map(el => {
      if (el.index === index) {
        el.quantity += quantity
        sameFood = true;
      }
    })
    if (!sameFood) {newArr = [ ...this.state.todaysFood, {name,quantity,calories, index}]}
    else {newArr = this.state.todaysFood}
    this.setState({
      todaysFood: newArr,
      total: this.state.total + (quantity*calories)
    })
  }

  _searchFood(filter) {
    this.setState({
      foods: foods.filter(el => {
        return el.name.match(new RegExp(`.*${filter}.*`, "i"));
      })
    });
  }

  _updateQuantity(event, index) {
    this.setState({
      foods: this.state.foods.map((el, i) => {
        if (index !== i) return el;
        return { ...el, quantity: Number(event.target.value) };
      })
    })
  }

  _updateSearchChange(event) {
    this.setState({
      search: event.target.value
    });
    return this._searchFood(event.target.value);
  }
}

export default Application;
