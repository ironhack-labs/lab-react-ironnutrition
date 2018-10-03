import React from "react";
import FoodBox from "./FoodBox";
import foods from "./foods.json";
import "bulma/css/bulma.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      foods: foods,
      todaysFood: [],
      total: 0
    };

    this.updateSearchChange = this.updateSearchChange.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.addFood = this.addFood.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

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
          updateQuantity={this.updateQuantity}
          addFood={this.addFood}
        />
      );
    });

    const todaysFoodList = this.state.todaysFood.map((food, index) => {
      //can have the search filter in front of the map
      return (
        <li
        key={"food_" + index}
        >{food.quantity} {food.name} = {food.quantity * food.calories} cal
        <button onClick={() => this.deleteItem(food)}>Delete</button></li>
      )
    })

    return (
      <div className="container">
        <h1>IronNutrition</h1>
        <input
          onChange={this.updateSearchChange}
          className="input"
          type="text"
        />
        <div className="columns">
          <div className="column">{foodList}</div>
          <div className="column is-one-third">
            <h2>Today's foods</h2>
            <ul>
              {todaysFoodList}
            </ul>
            <p>Total: {this.state.total} cal</p>
          </div>
        </div>
      </div>
    );
  }

  deleteItem({name,quantity,calories}) {
    this.setState({
      todaysFood:  this.state.todaysFood.filter((el) =>
      el.name !== name),
      total: this.state.total - quantity*calories
    })
  }

  addFood({ calories, name, quantity, index }) {
    if (quantity) {
      let sameFood = false;
      let newArr = [];
      this.state.todaysFood.map(el => {
        if (el.index === index) {
          el.quantity += quantity;
          sameFood = true;
        }
      });
      if (!sameFood) {
        newArr = [
          ...this.state.todaysFood,
          { name, quantity, calories, index }
        ];
      } else {
        newArr = this.state.todaysFood;
      }
      this.setState({
        todaysFood: newArr,
        total: this.state.total + quantity * calories
      });
    }
  }

  searchFood(filter) {
    this.setState({
      foods: foods.filter(el => {
        return el.name.match(new RegExp(`.*${filter}.*`, "i"));
      })
    });
  }

  updateQuantity(event, index) {
    this.setState({
      foods: this.state.foods.map((el, i) => {
        if (index !== i) return el;
        return { ...el, quantity: Number(event.target.value) };
      })
    });
  }

  updateSearchChange(event) {
    this.setState({
      search: event.target.value
    });
    return this.searchFood(event.target.value);
  }
}

export default App;
