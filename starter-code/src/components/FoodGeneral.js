import React, { Component } from "react";
import Foods from "../foods.json";
import FoodBox from "./FoodBox.js";
import NewFoodForm from "./NewFood.js";

class FoodGeneral extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      foods: [...Foods]
    };
  }

  addNewFood = food => {
    const foodCopy = [...Foods];
    foodCopy.push(food);
    this.setState({ foods: foodCopy });
  };

  toggleFormHandler = () => this.setState({ showForm: !this.state.showForm });

  render() {
    return (
      <div>
        <div>
          {this.state.foods.map((food, index) => (
            <FoodBox key={index} {...food} />
          ))}
        </div>
        <div>
          <h2>'FORMULARIO'</h2>
          <button type="button" onClick={this.toggleFormHandler}>
            Añadir Formulario
          </button>
          {this.state.showForm ? (
            <NewFoodForm includeFood={this.addNewFood} toggleFormHandler={this.toggleFormHandler}/>
          ) : null}
        </div>
      </div>
    );
  }
}

export default FoodGeneral;
