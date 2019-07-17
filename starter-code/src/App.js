import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddForm from "./AddForm";

// https://www.orientalmarket.es/wp-content/uploads/2019/02/dim-sum-1.jpg
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchString:"",
      list: foods
    };
  }

  addNewFoodHandler(newFood) {
    let newState = { ...this.state };

    newState.list.push({
      name: newFood.name,
      calories: newFood.calories,
      image: newFood.image,
      quantity: newFood.quantity
    });
    this.setState(newState);
  }

  
  handlerSearchChange(e) {
   let newState = { ...this.state };
   let newString=e.current.value

    // let newSearchA = { ...this.state };
    // let newSearch = newSearchA.list.filter(e.current.value)
    this.setState(
      newState = {
        searchString:newString,
        list: foods
      }
    );
  }



  render() {
    return (
      <section>
          <input
              type="text"
              placeholder="please write the food NAME"
              value={this.state.searchString}
              onChange={(e) => this.handlerSearchChange(e)}
            ></input>

        <AddForm addNewFoodHandler={food => this.addNewFoodHandler(food)} />
        {this.state.list.map((food, idx) => (
          <FoodBox
            name={food.name}
            image={food.image}
            calories={food.calories}
            quantity={food.quantity}
          />
        ))}
      </section>
    );
  }
}

export default App;
