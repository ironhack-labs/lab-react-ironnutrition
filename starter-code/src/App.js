import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood";


class App extends Component {
  state = {
    food: foods,
    addFoodButton:false
  };

addFoodButton= () => {
  this.setState({
    addFoodButton: !this.state.addFoodButton
  })
}

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.food];
    foodsCopy.unshift(theFood)
    this.setState({
      food: foodsCopy
    })
  }


  render() {

    let addFoodForm = null
    if(this.state.addFoodButton===true){
      addFoodForm = <AddFood addTheFood={this.addFoodHandler}/>
    }

    return (
      <div className="App">
        <button onClick={this.addFoodButton}>Add Food</button>
        {addFoodForm}
        {this.state.food.map((oneItem, index) => (
          <FoodBox
            key={index}
            name={oneItem.name}
            calories={oneItem.calories}
            image={oneItem.image}
            quantity={oneItem.quantity}
          />
        ))}
      </div>
    );
  }
  }
export default App;
