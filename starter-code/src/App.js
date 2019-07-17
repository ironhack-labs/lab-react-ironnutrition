import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./FoodBox";
import FormFood from "./formFood";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodElement: [...foods],
      
      food: {
        name:"",
        calories:undefined,
        img:""
      }
    };
  }

  addFood(e) {
    e.preventDefault()

    console.log("jave");
    // this.setState({...this.state})
  }


  render() {
    return (
      <div className="App">
        <FormFood addFood={(e)=>this.addFood(e)} />

        {this.state.foodElement.map((food, idx) => {
          return (
            <FoodBox
              name={food.name}
              photo={food.image}
              calories={food.calories}
              key={idx}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
