import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foods,
      showFormFood: false
    };
    this.addFoodHandler = this.addFoodHandler.bind(this);
    this.toggleFoods = this.toggleFoods.bind(this);
  }

  toggleFoods () {
    this.setState({
        showFormFood: !this.state.showFormFood
    })
}
  addFoodHandler(theFood) {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.toggleFoods();
    this.setState({
      foods: foodsCopy
    });
  }

  render() {
    const { showFormFood } = this.state;
    return (
      <div className="App">

        

        <button onClick={() => this.toggleFoods() } hidden={this.state.showFormFood}>Add Food!</button>
        {showFormFood ? <AddFood addTheFood={this.addFoodHandler} /> : null }

        {this.state.foods.map(el => {
          return (
            <FoodBox image={el.image} name={el.name} calories={el.calories} />
          );
        })}
      </div>
    );
  }
}

export default App;
