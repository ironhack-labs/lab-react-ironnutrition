import React from "react";
import FoodItem from "./FoodItem"


class FoodBox extends React.Component {
  render() {
    return (
      <div className="box">
          {this.props.foodList.map((oneItem, index) =>
            <FoodItem
              key={index}
              name={oneItem.name}
              calories={oneItem.calories}
              image={oneItem.image}
            />)
          }
     
      </div>
    )
  }
}

export default FoodBox;