import React from "react";

class FoodList extends React.Component {
  handleClick = e => {
    console.log(e.target.id);
    this.props.deleteFood(e.target.id);
  };

  render() {
    return (
      <div className="column">
        <h2 className="subtitle">Today's Foods</h2>
        <ul className="list">
          {this.props.foodsToList.map((el, index) => (
            <li key={index} className="list-item">
              {el.quantity} {el.name} = {el.calories * el.quantity}{" "}
              <button id={index} onClick={this.handleClick}>
                <span role="img" aria-label="trashcan">
                  🗑️
                </span>
              </button>
            </li>
          ))}
        </ul>
        <h2 className="subtitle">
          Total:{" "}
          {this.props.foodsToList.reduce(
            (acc, cv) => (acc += cv.quantity * cv.calories),
            0
          )}{" "}
          calories
        </h2>
      </div>
    );
  }
}

export default FoodList;
