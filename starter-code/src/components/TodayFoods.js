import React, { Component } from "react";

class TodayFoods extends Component {
  render() {
    return (
      <div>
        <div className="column is-half">
          <div className="box">
            <h1> Today's Foods </h1>
            {this.props.foods.map((food, index) => (
              <ul>
                <li key={index}>
                  {" "}
                  {food.quantity} {food.name} = {food.calories} calories{" "}
                </li>
              </ul>
            ))}

            <h3> Total Calories: </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default TodayFoods;
