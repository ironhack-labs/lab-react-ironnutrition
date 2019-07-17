import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import FormFood from "./FormFood";

class App extends Component {
  constructor() {
    super();

    this.state = { foodlist: foods };
  }

  addNewFood(newFood) {
    let newState = { ...this.state };

    newState.foodlist.push({
      name: newFood.name,
      calories: newFood.calories,
      image: newFood.image,
      quantity: newFood.quantity
    });

    this.setState(newState);
  }

  SearchFood(e) {
    let searchtext = e.target.value;
    let clonedArray = [...foods];
    let filteredArray = clonedArray.filter(namefood => {
      return namefood.name.toLowerCase().indexOf(searchtext.toLowerCase()) >= 0;
    });

    this.setState({
      ...this.state,
      foodlist: filteredArray
    });
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-food"
          type="text"
          placeholder="Search food"
          defaultValue=""
          onChange={e => this.SearchFood(e)}
        />
        <FormFood
          className="formfood"
          addNewFoodHandler={food => this.addNewFood(food)}
        />
        {this.state.foodlist.map((food, idx) => (
          <FoodBox key={idx} food={food} />
        ))}
      </div>
    );
  }
}

export default App;
