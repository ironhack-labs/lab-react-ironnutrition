import React, { Component } from "react";
import FoodBox from "./FoodBox";

class FoodList extends Component {
  render() {
    // let foodArray = this.props.myfoods;
    let addToday = this.props.addToToday;

    return (
      <div>
        <ul>
          {this.props.myfoods &&
            this.props.myfoods.map((item, indx) => (
              <FoodBox
                name={item.name}
                calories={item.calories}
                image={item.image}
                key={indx}
                onPlus={addToday}
              />
            ))}
        </ul>
      </div>
    );
  }
}
export default FoodList;
