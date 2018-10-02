import React, { Component } from "react";
import { FoodBox } from "./foodbox";
import foods from "../foods.json";
//name, calories, image, quantity


export class FoodMenu extends Component {

  constructor() {
    super();

  }

  render() {
    return (

      foods.map((e) => {
        return (
          <FoodBox key={e.name} name={e.name} calories={e.calories} image={e.image} quantity="" />
        )
      })
    )
  }
}