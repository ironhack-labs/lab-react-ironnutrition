import React, { Component } from "react";
import foods from "../foods.json";
import "./FoodBox.css";
import FoodForm from "./FoodForm.js";
import SearchForm from "./SearchForm.js";

class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      food: foods,
      showForm: false,
      search: ""
    }
  }

  printForm() {
    const { showForm } = this.state;

    this.setState({showForm: true})
  }

  addNewFood(newFood) {
    const { food } = this.state;

    food.unshift(newFood);
    this.setState({food});
  }

  searchFor(event) {
    const { name, value } = event.target;
    
  
    let foodCopy = foods.filter(oneFood => oneFood.name.toLowerCase().includes(value.toLowerCase()) );

    this.setState({[name]: value, food: foodCopy});

  }

  // results(filterSearch) {
   
  //   this.setState({food});
  // }

  render() {
    const { food } = this.state

    const foodHtml = food.map((oneIngredient) => {
      return(
        <li>
          <h2>{oneIngredient.name}</h2>
          <p>{oneIngredient.calories}</p>
          <img src={oneIngredient.image} />
          <p>Quantity: {oneIngredient.quantity}</p>
        </li>
      )
    })

    const { showForm } = this.state
    return(
      <section>

        <SearchForm search={this.state.search} searchFor={event => this.searchFor(event)} />

        <button onClick={() => this.printForm()}>
          Add new food
        </button>

        {showForm && <FoodForm addNewFood={newFood => this.addNewFood(newFood)} />}

        <ul>
          { foodHtml }
        </ul>

      </section>
    )

  }
}

export default FoodBox;