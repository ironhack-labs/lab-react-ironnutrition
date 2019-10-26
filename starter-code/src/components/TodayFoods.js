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
                <li> {food.name} </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TodayFoods;
