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
      list: foods
    };
  }

  addNewFoodHandler(newFood) {
    let newState = {...this.state};
   
    newState.list.push({
      name: newFood.name,
      calories: newFood.calories,
      image: newFood.image,
      quantity: newFood.quantity
    })
    this.setState(newState)
  };


  render() {
    return (
      <section>
       <AddForm addNewFoodHandler={(food)=>this.addNewFoodHandler(food)}></AddForm>

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
