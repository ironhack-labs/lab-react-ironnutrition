import React, { Component } from "react";
import "bulma/css/bulma.css";

class Today extends Component {
  render() {
    return (
      <div className="today">
        <h2>Today's selection:</h2>
        {this.props.todaysFood.map((item, index) => {
          return (
            <div key={index}>
              <div>{item.name} </div>
              <div>{item.calories} </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Today;
