import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import NewFoodForm from "./components/NewFoodForm";

class App extends Component {
  state = {
    newFoodForm: false,
    foodItem: {
      name: "",
      calories: 0,
      image: ""
    },
    foodList: []
  };

  showNewFoodForm = () => {
    let { newFoodForm } = this.state;
    newFoodForm ? (newFoodForm = false) : (newFoodForm = true);
    this.setState({ newFoodForm });
  };

  handleChange = e => {
    const {foodItem} = this.state;
    let field = e.target.name;
    foodItem[field] = e.target.value;
    this.setState({foodItem})
  }

  handleSubmit = e => {
    e.preventDefault();
    let { foodItem, foodList, newFoodForm } = this.state;
    foodList.push(foodItem);
    foodItem = {
      name: "",
      calories: 0,
      image: ""
    };
    newFoodForm = false;
    console.log(foodList);
    this.setState({ foodItem, foodList, newFoodForm });
  };

  render() {
    const { newFoodForm, foodItem, foodList } = this.state;
    return (
      <div className="App">
        <FoodBox foods={foods} />
        {newFoodForm ? (
          <NewFoodForm
            {...foodItem}
            foodList={foodList}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        ) : (
          <button onClick={this.showNewFoodForm} className="button is-info">
            Add New Food
          </button>
        )}
      </div>
    );
  }
}

export default App;
