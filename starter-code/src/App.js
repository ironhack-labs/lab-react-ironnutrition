import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json"; 
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";

class App extends Component {
  state = {
    allFoods: foods, 
    form: "",
    showForm: false,
    image: `data:image/jpeg;base64,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`,
  };

  displayFoods = () => {
    return this.state.allFoods.map((eachFood) => {
      return (
        <FoodBox
          key={eachFood.name}
          name={eachFood.name}
          calories={eachFood.calories}
          image={eachFood.image}
        />
      );
    });
  };

  addFood = (e) => {
    e.preventDefault();

    let newFood = {
      name: e.target.name.value,
      calories: e.target.calories.value,
      image: e.target.image.value,
      quantity: e.target.quantity.value,
    };

    let updatedFoods = [...this.state.allFoods];
    updatedFoods.unshift(newFood);

    this.setState({
      showForm: false, //true false true false toggle,
      allFoods: updatedFoods,
    });
  };

  search = (e) => {
    let foodsArray = foods.filter((eachFood) => {
      return eachFood.name.includes(e.target.value);
    });
    this.setState({ allFoods: foodsArray });
  };

  displayForm = () => {
    if (this.state.showForm) {
      return (
        <form onSubmit={this.addFood}>
          <input id="name" name="name" type="text" placeholder="add food" />
          <input
            id="calories"
            name="calories"
            type="number"
            placeholder="add calories"
          />
          <input id="image" name="image" type="text" placeholder="add image" />
          <input
            id="quantity"
            name="quantity"
            type="number"
            placeholder="add quantity"
          />
          <button>Add new food</button>
        </form>
      );
    } else {
      return <Search search={this.search} showForm={this.showForm} />;
    }
  };

  showForm = () => {
    this.setState({
      showForm: true, //true false true false toggle
    });
  };

  render() {
    console.log(foods);
    return (
      <div className="App">
        {this.displayForm()}
        {this.displayFoods()}
      </div>
    );
  }
}

export default App;
