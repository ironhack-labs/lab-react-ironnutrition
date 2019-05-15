import React from "react";
import TodaysFoodBox from "./TodaysFoodBox";

class todaysFood extends React.Component {
  state = {};
  addFunction = () => {};
  render() {
    let calories = 0;
    return (
      <div className="todaysContainer">
        <h3>Today's Food</h3>
        {this.props.addedFoodsObj.map((item, i) => {
          calories += Number(item.calories);

          return (
            <TodaysFoodBox
              foods={item}
              key={i}
              addTodaysFood={this.addTodaysFood}
              addQuantity={this.addQuantity}
            />
          );
        })}
        <h2>Total Calories: {calories}</h2>
      </div>
    );
  }
}
export default todaysFood;
