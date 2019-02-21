import React, { Component } from "react";
import "./Selection.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

function totalCalSelected(arr) {
  if (arr.length > 0) {
    let totalAllCal = arr.reduce((a, b) => {
      return { totalCalories: a.totalCalories + b.totalCalories };
    }).totalCalories;
    return <h5>Total: {totalAllCal} calories</h5>;
  } else {
    return <h5>Total: 0 calories</h5>;
  }
}

class Selection extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedArray: this.props.selectedFoods };
  }

  handleDelete(event, foodName) {
    event.preventDefault();
    this.props.deleteSelected(foodName);
  }

  render() {
    const { selectedArray } = this.state;

    return (
      <div className="Selection">
        <h3>Today's foods</h3>

        <ul>
          {selectedArray.map((oneFood, index) => {
            return (
              <li key={index}>
                <p>
                  {oneFood.quantity} {oneFood.name} = {oneFood.totalCalories}{" "}
                  cal{" "}
                  <FontAwesomeIcon
                    icon="trash"
                    onClick={event => this.handleDelete(event, oneFood.name)}
                  />
                </p>
              </li>
            );
          })}
        </ul>

        {totalCalSelected(selectedArray)}
      </div>
    );
  }
}

export default Selection;
