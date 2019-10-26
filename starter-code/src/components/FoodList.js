import React, { Component } from "react";
import FoodBox from "./FoodBox";

class FoodList extends Component {
  render() {
    let foodArray = this.props.myfoods;
    let addToday = this.props.addToToday;

    return (
      <ul>
        {foodArray.map((item, index) => (
          <FoodBox
            name={item.name}
            calories={item.calories}
            image={item.image}
            key={item.name}
            onPlus={addToday}
          />
        ))}
      </ul>
    );
  }
}

export default FoodList;
