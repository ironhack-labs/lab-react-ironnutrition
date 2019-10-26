import React, { Component } from "react";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood";
import foods from "../foods.json";
import { Button } from "react-bulma-components";
// {
//     "name": "Pizza",
//     "calories": 400,
//     "image": "https://i.imgur.com/eTmWoAN.png",
//     "quantity": 0
//   },
class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      formShown: false
    };
  }
  toggleAddFood = () => {
    this.setState({ formShown: !this.state.formShown });
  };
  addFood = food => {
    const newArr = [food, ...this.state.foods];
    this.setState({
      foods: newArr
    });
  };
  render() {
    console.log(this.state.foods);

    return (
      <div>
        {this.state.formShown ? <AddFood addNewFood={this.addFood} /> : null}

        <Button onClick={() => this.toggleAddFood()}> Add Food</Button>
        <ul>
          {this.state.foods.map((food, idx) => {
            return <FoodBox key={idx} {...food} />;
          })}
        </ul>
      </div>
    );
  }
}
export default FoodList;
