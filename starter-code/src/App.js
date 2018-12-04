import React, { Component } from "react";
import "./App.css";

import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import ShoppingCart from "./components/ShoppingCart";
import { AddButton, StyledForm, SearchBar } from "./App.styled";

class App extends Component {
  state = {
    foods: foods,
    newFood: {
      name: "",
      calories: "",
      image: ""
    },
    cart: [],
    isAdding: false
  };

  addHandler = () => {
    this.setState({
      ...this.state,
      isAdding: !this.state.isAdding
    });
  };

  addIngredientHandler = e => {
    const myCart = this.state.cart;
    const myQuantity = e.target.parentNode.parentNode.firstChild.firstChild.value;
    const myIngredientFetch = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    const myIngredient = [...this.state.foods].filter(elem => {
      if (elem.name.includes(myIngredientFetch.title)) {
        elem.quantity = +myQuantity;
        elem.calories *= +myQuantity;
        return elem;
      }
    });
    myCart.push(...myIngredient);
    console.log(myCart);
    this.setState({
      ...this.state,
      cart: myCart
    });
  };

  searchHandler = e => {
    const myRegex = new RegExp(e.target.value, "gi");
    const filteredFood = [...this.state.foods].filter(({ name }) =>
      name.match(myRegex)
    );
    this.setState({
      ...this.state,
      foods: filteredFood
    });
  };

  changeHandler = e => {
    const updatedNewFood = { ...this.state.newFood };
    updatedNewFood[e.target.title] = e.target.value;
    this.setState({
      ...this.state,
      newFood: updatedNewFood
    });
  };

  submitHandler = e => {
    const updatedFoods = [...this.state.foods];
    updatedFoods.push(this.state.newFood);
    this.setState({
      ...this.state,
      foods: updatedFoods
    });
    console.log(this.state);
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <AddButton onClick={this.addHandler}>Add New Food</AddButton>
        {this.state.isAdding && (
          <StyledForm onSubmit={this.submitHandler}>
            <label>Name: </label>
            <input
              title="name"
              placeholder="Pizza"
              type="text"
              onChange={this.changeHandler}
              required
            />

            <label>Calories: </label>
            <input
              title="calories"
              placeholder="400"
              type="number"
              onChange={this.changeHandler}
              required
            />

            <label>Image URL: </label>
            <input
              title="image"
              placeholder="https://i.imgur.com/2ZV7EwI.jpg"
              type="text"
              onChange={this.changeHandler}
              required
            />
            <button type="submit">Submit</button>
          </StyledForm>
        )}
        <SearchBar placeholder="Search a Food" onChange={this.searchHandler} />
        <FoodBox
          addIngredient={this.addIngredientHandler}
          cart={this.state.cart}
          foods={this.state.foods}
        />
        <ShoppingCart myCart={this.state.cart} />
      </React.Fragment>
    );
  }
}

export default App;
