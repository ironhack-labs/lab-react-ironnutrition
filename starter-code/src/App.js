import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import FoodForm from "./components/FoodForm";


class App extends Component {
  constructor(props) {
    super(props);
    console.log(foods);
    console.log(foods.slice(0, 5));
    this.state = { listFood: foods.slice(0, foods.length) };
  }

  addNewFood (food) {
    this.state.listFood.push(food)
    this.setState({listFood: this.state.listFood})
  }

  addQuantity (food) {
    const name = food.name;
    this.state.listFood.forEach(food => {
      if (food.name === name)
        food.quantity ++
    })
    this.setState({listFood: this.state.listFood})
  }

  render() {
    return (
      <div className="App">

        <FoodForm handleNewFoodInApp={(food) => this.addNewFood(food)}></FoodForm>

        {this.state.listFood.map((meal, index) => {
          return <FoodBox 
            meal={meal} 
            key={index} 
            addQuantity={this.addQuantity.bind(this)}
            ></FoodBox>;
        })}
      </div>
    );
  }
}

export default App;
