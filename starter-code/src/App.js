import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Foodlist from "./foods.json";
import FoodBox from "./FoodBox";
import Form from "./Form";

class App extends React.Component {
  state = {
    foods: Foodlist
  };
  addNewFood(newFoodDetails) {
    var foodArr = [...this.state.foods]
    foodArr.push(newFoodDetails )

    this.setState({
      ...this.state,
      foods: foodArr
    })
  }

  render() {
    const foodData = 
     this.state.foods.map((food, idx) => {
      return (
        <React.Fragment key={idx}>
            <FoodBox {...food} />
        </React.Fragment>
      )
    })
      
    return(
      <React.Fragment>
        <Form newFood={(newFood) => this.addNewFood(newFood)}></Form>
        {foodData}
      </React.Fragment>
    )
  }
}

export default App;
